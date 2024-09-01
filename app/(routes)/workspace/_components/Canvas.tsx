import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { File } from "../../dashboard/_context/fileListContext";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface CanvasProps {
  onSaveTrigger: number;
  fileId: any;
  fileData: File;
}

const Canvas = ({ onSaveTrigger, fileData, fileId }: CanvasProps) => {
  const [whiteboardData, setWhiteboardData] = useState<any>();

  const updateWhiteboard = useMutation(api.file.updateWhiteboard);
  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteboardData),
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  console.log(fileData);

  return (
    <div className="h-[90vh]">
      {fileData && (
        <Excalidraw
          onChange={(excalidrawElements, appState, files) =>
            setWhiteboardData(excalidrawElements)
          }
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          }}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
              toggleTheme: false,
            },
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
};

export default Canvas;

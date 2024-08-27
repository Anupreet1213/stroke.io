import React, { useContext, useEffect, useState } from "react";
import SidebarTopSection from "./SidebarTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidebarBottomSection from "./SidebarBottomSection";
import { useToast } from "@/components/ui/use-toast";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FileListContext } from "../_context/fileListContext";

export interface Teams {
  createdBy: string;
  teamName: string;
  _id: string;
}

const Sidebar = () => {
  const [activeTeam, setActiveTeam] = useState<Teams>({
    createdBy: "",
    teamName: "",
    _id: "",
  });
  const [numberOfFiles, setNumberOfFiles] = useState<number>(0);

  const { user }: any = useKindeBrowserClient();
  const { toast } = useToast();
  const { fileList, setFileList } = useContext(FileListContext)!;

  const convex = useConvex();

  const createNewFile = async (filename: string) => {
    try {
      const result = await convex.mutation(api.file.createFile, {
        fileName: filename,
        createdBy: user?.email,
        teamId: activeTeam?._id,
        archived: false,
        document: "",
        whiteboard: "",
      });

      getFiles();
      toast({
        title: "File created sucessfully!!",
      });
    } catch (err) {
      console.log("Error in Sidebar.tsx while creating new file: ", err);
      toast({
        title: "Oops, Something went wrong!!",
      });
    }
  };

  const getFiles = async () => {
    const result = await convex.query(api.file.getFiles, {
      teamId: activeTeam._id,
    });
    setFileList(result);
    setNumberOfFiles(result.length);
  };

  useEffect(() => {
    getFiles();
  }, [activeTeam]);

  return (
    <div className="bg-black  bg-opacity-40  h-screen text-white p-4 flex flex-col">
      <div className="flex-1">
        <SidebarTopSection
          user={user}
          activeTeam={activeTeam}
          setActiveTeam={setActiveTeam}
        />
      </div>
      <div>
        <SidebarBottomSection
          createNewFile={createNewFile}
          numberOfFiles={numberOfFiles}
        />
      </div>
    </div>
  );
};

export default Sidebar;

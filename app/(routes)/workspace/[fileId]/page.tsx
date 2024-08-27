"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import Canvas from "../_components/Canvas";
import { File } from "../../dashboard/_context/fileListContext";

const Workspace = ({ params }: any) => {
  const [triggerSave, settriggerSave] = useState<number>(0);
  const [fileData, setFileData] = useState<File | any>();
  const [handleSwitch, setHandleSwitch] = useState<number>(1);

  const convex = useConvex();

  useEffect(() => {
    params.fileId && getFileData();
  }, []);

  const getFileData = async () => {
    const result = await convex.query(api.file.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
  };

  return (
    <div className="bg-hero-pattern bg-cover h-screen">
      <WorkspaceHeader
        onSave={() => settriggerSave(Date.now())}
        setHandleSwitch={setHandleSwitch}
        handleSwitch={handleSwitch}
        fileData={fileData}
      />
      <div className="grid grid-cols-2 bg-white md:grid-cols-2 ">
        <div
          className={`h-full ${handleSwitch === 0 ? "col-span-2" : handleSwitch === 2 ? "hidden" : "col-span-1"}`}
        >
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
        <div
          className={`h-full border-l ${handleSwitch === 2 ? "col-span-2" : handleSwitch === 0 ? "hidden" : "col-span-1"}`}
        >
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;

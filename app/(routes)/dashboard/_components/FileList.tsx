"use client";
import React, { useContext, useEffect, useState } from "react";
import { File, FileListContext } from "../_context/fileListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import moment from "moment";
import { Archive, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const FileList = () => {
  const [fileListLocal, setFileListLocal] = useState<File[]>([]);
  const { fileList } = useContext(FileListContext)!;

  const router = useRouter();

  const { user }: any = useKindeBrowserClient();

  useEffect(() => {
    setFileListLocal(fileList);
    console.log(fileList);
  }, [fileList]);
  return (
    <div className="text-white p-2 dark">
      <div className=" mt-7">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Created At
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Edited At
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Author
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {fileListLocal.length > 0 ? (
              fileListLocal.map((eachFile: File) => (
                <tr
                  key={eachFile?._id}
                  className="odd:bg-gray-50 dark:odd:bg-gray-800/50"
                  onClick={() => router.push(`/workspace/${eachFile?._id}`)}
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    {eachFile?.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {moment(eachFile?._creationTime).format("Do MMM, YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {moment(eachFile?._creationTime).format("Do MMM, YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    <Image
                      className="rounded-full"
                      src={user?.picture}
                      width={25}
                      height={25}
                      alt="user"
                    />
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal size={15} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="">
                        <DropdownMenuItem className="gap-3 cursor-pointer">
                          <Archive size={17} /> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="odd:bg-gray-50 dark:odd:bg-gray-800/50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  No Files Created
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"></td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"></td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;

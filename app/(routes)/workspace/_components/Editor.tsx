"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS, { BlockToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// @ts-ignore
import Checklist from "@editorjs/checklist";

import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import InlineCode from "@editorjs/inline-code";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "@/components/ui/use-toast";
import { File } from "../../dashboard/_context/fileListContext";

interface EditorProps {
  onSaveTrigger: number;
  fileId: any;
  fileData: File | undefined;
}

const Editor = ({ onSaveTrigger, fileId, fileData }: EditorProps) => {
  const rawData = {
    time: 1550476186479,
    blocks: [
      {
        data: {
          text: "Document Name",
          level: 2,
        },
        id: "123",
        type: "header",
      },
      {
        data: {
          level: 4,
        },
        id: "1234",
        type: "header",
      },
    ],
    version: "2.8.1",
  };

  const [documentData, setDocumentData] = useState(rawData);
  const ref = useRef<EditorJS>();
  const updateDocument = useMutation(api.file.updateDocument);

  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          })
            .then(() => {
              toast({
                title: "Document Updated",
              });
            })
            .catch((err) => {
              toast({
                title: "Server Error",
              });
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        quote: {
          class: Quote as unknown as BlockToolConstructable,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        table: {
          class: Table as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        header: {
          class: Header as unknown as BlockToolConstructable,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
      },
      holder: "editorjs",
      data: fileData?.document ? JSON.parse(fileData.document) : rawData,
    });
    ref.current = editor;
  };

  return (
    <div className="p-2 h-screen">
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;

"use client";

import { useApp } from "@/app/provider";
import { FileInput } from "@/components/file-input";

export const Filedropper = function () {
  const app = useApp();

  return (
    <>
      <FileInput
        className="px-10"
        onChange={async (e) => {
          if (e.target.files?.[0]) {
            const reader = new FileReader();
            reader.onload = function () {
              app.setState((x) => {
                const result = reader.result?.toString() || "";
                x.conversion.input.data = result;
                x.conversion.input.mimeType =
                  result.match(/^data:([^;]+);/)?.[1] || "";
              });
            };
            reader.readAsDataURL(e.target.files![0]);
          } else {
            app.setState((x) => {
              x.conversion.input.data = "";
              x.conversion.input.mimeType = "";
            });
          }
        }}
      >
        Test
      </FileInput>
      <FilePreview />
    </>
  );
};

const FilePreview = function () {
  const app = useApp();

  const mimeType = app((x) => x.conversion.input.mimeType);
  const data = app((x) => x.conversion.input.data);

  return (
    <>
      <div>{mimeType}</div>
      <img src={data} />
    </>
  );
};

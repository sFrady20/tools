"use server";

import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export const POST = async function (req: NextRequest, res: NextResponse) {
  const params = await req.formData();

  const file = params.get("file") as File;
  const outputFileType = params.get("outputFileType");

  const width = parseInt(params.get("width") as string);
  const height = parseInt(params.get("height") as string);

  const image = sharp(await file.arrayBuffer());

  if (width && height) image.resize(width, height, { fit: "cover" });

  switch (outputFileType) {
    case "image/webp":
      image.webp();
      return new NextResponse(
        new Blob([await image.toBuffer()], { type: "image/webp" })
      );

    case "image/png":
      image.png();
      return new NextResponse(
        new Blob([await image.toBuffer()], { type: "image/png" })
      );

    case "image/jpeg":
      image.jpeg();
      return new NextResponse(
        new Blob([await image.toBuffer()], { type: "image/jpeg" })
      );
  }

  return new NextResponse(
    new Blob([await image.toBuffer()], { type: "image/webp" })
  );
};

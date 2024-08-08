import { db } from "@/services/db";
import { NextResponse } from "next/server";
import * as schema from "@/schema";

export const GET = async () => {
  const users = await db.select({ name: schema.users.name }).from(schema.users);
  return NextResponse.json(users);
};

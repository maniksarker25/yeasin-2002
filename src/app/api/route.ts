import { NextResponse } from "next/server";


export const GET = () => {
  return NextResponse.json({ message: "Yeasin2002" }, {
    status: 202
  });
};

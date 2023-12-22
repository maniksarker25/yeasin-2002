import { NextResponse } from "next/server";

type successHandler = (data?: any, message?: string, status?: number) => void;
type ErrorHandler = (status?: number, message?: string, data?: any) => void;

export const successResponse: successHandler = (
  data,
  message = "success",
  status = 200
) => {
  return NextResponse.json({ status, message, data }, { status });
};

export const ErrorResponse: ErrorHandler = (
  status = 500,
  message = "Internal Server Error",
  data = null
) => {
  return NextResponse.json({ status, message, data }, { status });
};

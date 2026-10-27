import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "./lib/admin-session";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/admin/login" || path === "/admin/login/") {
    return NextResponse.next();
  }

  if (!(await hasAdminSession(request))) {
    const destination = request.nextUrl.clone();
    destination.pathname = "/admin/login";
    destination.search = "";
    return NextResponse.redirect(destination);
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"]
};

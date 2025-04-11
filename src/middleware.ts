import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const response = NextResponse.next();

  if (!token && request.nextUrl.pathname.startsWith("/conta")) {
    response.cookies.set("entrouConta", "true", {
      httpOnly: true,
    });
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return response;
  }
}

export const config = {
  matcher: ["/conta"],
};

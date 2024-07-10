import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('guapiPapeis-accessToken')?.value;

  const signInUrl = new URL('/', request.url);
  const dashboardUrl = new URL('/dashboard', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(dashboardUrl);
  }


}

export const config = {
  matcher: ['/', '/dashboard/:path*']
}

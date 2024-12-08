import { auth } from './auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn) {
    return Response.redirect(new URL('/api/auth/signin', req.nextUrl));
  }
});

export const config = {
  matcher: ['/dashboard/:path*'],
};

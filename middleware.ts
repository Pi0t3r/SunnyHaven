import {authMiddleware} from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/cats','/dogs'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

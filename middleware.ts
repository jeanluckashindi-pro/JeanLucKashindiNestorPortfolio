import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['fr', 'en', 'zh', 'ru', 'pt', 'es', 'sw', 'rn'],

    // Used when no locale matches
    defaultLocale: 'fr'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(fr|en|zh|ru|pt|es|sw|rn)/:path*']
};

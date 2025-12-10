import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';

    // Redirect non-www to www in production
    // We check for existing 'www.' to avoid infinite loops and ensuring it's not localhost
    // Adjust domain check as needed for your specific environments
    if (process.env.NODE_ENV === 'production' && host === 'iframegenerator.org') {
        const newUrl = new URL(request.url);
        newUrl.host = 'www.iframegenerator.org';
        return NextResponse.redirect(newUrl, 301);
    }

    return handleI18nRouting(request);
}

export const config = {
    // Match all pathnames except for
    // - API routes
    // - _next (Next.js internals)
    // - Static files (images, favicon, etc.)
    matcher: ['/((?!api|_next|.*\\..*).*)']
};

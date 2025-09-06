import createMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const intl = createMiddleware(routing)
const locales = routing.locales

export default function middleware(req: Request) {
  const url = new URL(req.url)
  const p = url.pathname

  // Prevent redirect loops when rewriting from a different domain
  if (
    locales.some((locale) => p === `/${locale}` || p.startsWith(`/${locale}/`))
  ) {
    return NextResponse.next()
  }
  return intl(req as any)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}

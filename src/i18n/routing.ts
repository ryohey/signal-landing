import { defineRouting } from "next-intl/routing"

const locales = ["en", "ja", "fr", "zh-hans", "zh-hant"] as const

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  domains: [
    {
      domain:
        "signal-landing-git-next-intl2-ryohei-kameyamas-projects.vercel.app",
      defaultLocale: "en",
      locales: ["en", "ja", "fr", "zh-hans", "zh-hant"],
    },
  ],
  localePrefix: "always",
})

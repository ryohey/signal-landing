import { formats } from "@/i18n/request"
import { routing } from "@/i18n/routing"
import messages from "../messages/en.json"

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
    Formats: typeof formats
  }
}

type Messages = typeof messages

declare global {
  // Use type safe message keys with `getTranslations`
  interface IntlMessages extends Messages {}
}

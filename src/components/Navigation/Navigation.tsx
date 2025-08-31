import { useTranslations } from "next-intl"
import { Link } from "../../i18n/navigation"
import discordIcon from "./images/discord-icon.svg"
import githubIcon from "./images/github-icon.svg"
import logoWhite from "./images/logo-white.svg"

export const Navigation = () => {
  const t = useTranslations()

  return (
    <header className="bg-background">
      <div className="py-8 flex justify-between items-center max-w-4xl w-[90%] mx-auto">
        <Link href="/" className="flex hover:opacity-70 [&_img]:h-7">
          <img src={logoWhite.src} />
        </Link>
        <div className="flex items-center gap-4 [&>a]:text-white [&>a]:no-underline [&>a]:text-sm [&>a]:hover:opacity-70">
          <Link href="/support" className="mr-4">
            {t("support")}
          </Link>
          <Link
            href="https://discord.com/invite/XQxzNdDJse"
            className="inline-flex items-center [&_img]:w-6 [&_img]:h-6 [&_img]:fill-white"
          >
            <img src={discordIcon.src} />
          </Link>
          <Link
            href="https://github.com/ryohey/signal/"
            id="github-link"
            className="inline-flex items-center [&_img]:w-6 [&_img]:h-6 [&_img]:fill-white"
          >
            <img src={githubIcon.src} />
          </Link>
        </div>
      </div>
    </header>
  )
}

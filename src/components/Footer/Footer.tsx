import { useTranslations } from "next-intl"

const Link = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="text-xs text-white opacity-50 no-underline hover:opacity-100"
  >
    {children}
  </a>
)

export const Footer = () => {
  const t = useTranslations()

  return (
    <footer>
      <div className="flex gap-4 py-8 justify-center items-center max-w-4xl w-full mx-auto">
        <Link href="/support">{t("support")}</Link>
        <Link href="/privacy">{t("privacy-policy-title")}</Link>
      </div>
    </footer>
  )
}

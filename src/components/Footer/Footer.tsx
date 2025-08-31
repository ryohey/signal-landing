import { useTranslations } from "next-intl"
import { Link } from "../../i18n/navigation"

const FooterLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className="text-xs text-white opacity-50 no-underline hover:opacity-100"
  >
    {children}
  </Link>
)

export const Footer = () => {
  const t = useTranslations()

  return (
    <footer>
      <div className="flex gap-4 py-8 justify-center items-center max-w-4xl w-full mx-auto">
        <FooterLink href="/support">{t("support")}</FooterLink>
        <FooterLink href="/privacy">{t("privacy-policy-title")}</FooterLink>
      </div>
    </footer>
  )
}

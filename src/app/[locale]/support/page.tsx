import { Locale, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Footer } from "../../../components/Footer/Footer"
import { Navigation } from "../../../components/Navigation/Navigation"
import { Link } from "../../../i18n/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: `${t("support")} | signal`,
    alternates: {
      languages: {
        en: "https://signalmidi.app/en/support",
        ja: "https://signalmidi.app/ja/support",
        fr: "https://signalmidi.app/fr/support",
        "zh-hans": "https://signalmidi.app/zh-hans/support",
        "zh-hant": "https://signalmidi.app/zh-hant/support",
      },
    },
  }
}

const Section = ({
  title,
  children,
}: {
  title: React.ReactNode
  children: React.ReactNode
}) => (
  <section className="my-12">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
)

const OpenButton = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className="mt-4 block bg-primary text-white py-2 px-4 rounded-full no-underline font-bold inline-block text-base border-2 border-transparent hover:opacity-90"
  >
    {children}
  </Link>
)

export default function Page() {
  const t = useTranslations()

  return (
    <>
      <Navigation />
      <div className="max-w-4xl w-[90%] mx-auto">
        <h1 className="mt-16 text-3xl font-bold">{t("support")}</h1>

        <Section title={t("bug-report")}>
          <p>{t("bug-report-description")}</p>
          <OpenButton href="https://github.com/ryohey/signal/issues">
            {t("open-github-issues")}
          </OpenButton>
        </Section>

        <Section title={t("community")}>
          <p>{t("community-description")}</p>
          <OpenButton href="https://discord.com/invite/XQxzNdDJse">
            {t("join-discord")}
          </OpenButton>
        </Section>

        <Section title={t("twitter")}>
          <p>{t("follow-twitter")}</p>
          <OpenButton href="https://twitter.com/signalmidi">
            @signalmidi
          </OpenButton>
        </Section>
      </div>

      <Footer />
    </>
  )
}

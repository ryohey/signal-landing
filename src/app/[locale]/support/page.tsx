import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { Footer } from "../../../components/Footer/Footer"
import { Navigation } from "../../../components/Navigation/Navigation"

export const metadata: Metadata = {
  title: "Support | signal",
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
  <a
    href={href}
    className="mt-4 block bg-primary text-white py-2 px-4 rounded-full no-underline font-bold inline-block text-base border-2 border-transparent hover:opacity-90"
  >
    {children}
  </a>
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

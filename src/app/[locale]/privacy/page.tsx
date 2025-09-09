import { Locale, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Footer } from "../../../components/Footer/Footer"
import { Navigation } from "../../../components/Navigation/Navigation"
import { LocaleDate } from "./LocaleDate"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: `${t("privacy-policy-title")} | signal`,
    alternates: {
      languages: {
        en: "https://signalmidi.app/en/privacy",
        ja: "https://signalmidi.app/ja/privacy",
        fr: "https://signalmidi.app/fr/privacy",
        "zh-hans": "https://signalmidi.app/zh-hans/privacy",
        "zh-hant": "https://signalmidi.app/zh-hant/privacy",
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
    <h2 className="text-xl font-bold mt-8">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
)

export default function Page() {
  const t = useTranslations()

  return (
    <>
      <Navigation />
      <div className="max-w-4xl w-[90%] mx-auto">
        <h1 className="mt-16 text-3xl font-bold mt-4">
          {t("privacy-policy-title")}
        </h1>
        <p>{t("privacy-policy-description")}</p>

        <Section title={t("privacy-data-title")}>
          <p>{t("privacy-data-description")}</p>
        </Section>

        <Section title={t("privacy-analytics-title")}>
          <p>{t("privacy-analytics-description")}</p>
        </Section>

        <p>
          {t("privacy-updated")}
          <LocaleDate date={new Date("2024/05/03")} />
        </p>
      </div>

      <Footer />
    </>
  )
}

import { Metadata } from "next"
import { Footer } from "../../components/Footer/Footer"
import Localized from "../../components/Localized"
import { Navigation } from "../../components/Navigation/Navigation"
import { LocaleDate } from "./LocaleDate"

export const metadata: Metadata = {
  title: "Privacy Policy | signal",
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
  return (
    <>
      <Navigation />
      <div className="max-w-4xl w-[90%] mx-auto">
        <h1 className="mt-16 text-3xl font-bold mt-4">
          <Localized name="privacy-policy-title" />
        </h1>
        <p>
          <Localized name="privacy-policy-description" />
        </p>

        <Section title={<Localized name="privacy-data-title" />}>
          <p>
            <Localized name="privacy-data-description" />
          </p>
        </Section>

        <Section title={<Localized name="privacy-analytics-title" />}>
          <p>
            <Localized name="privacy-analytics-description" />
          </p>
        </Section>

        <p>
          <Localized name="privacy-updated" />
          <LocaleDate date={new Date("2024/05/03")} />
        </p>
      </div>

      <Footer />
    </>
  )
}

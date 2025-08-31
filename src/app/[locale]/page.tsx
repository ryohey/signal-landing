import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { FeatureList } from "../../components/FeatureList/FeatureList"
import { Footer } from "../../components/Footer/Footer"
import { Navigation } from "../../components/Navigation/Navigation"
import "./carbon.css"
import githubIcon from "./images/github-icon.svg"
import favoriteIcon from "./images/iconmonstr-favorite-4.svg"
import twitterIcon from "./images/iconmonstr-twitter-1.svg"
import macAppStore from "./images/mac-app-store.svg"
import microsoftStore from "./images/microsoft-store.svg"
import screenshot from "./images/screenshot.png"
import twitterCard from "./images/twitter-card.png"

export const metadata: Metadata = {
  title: "signal - Online MIDI Editor",
  description: "Fully Open-sourced Online MIDI Editor",
  openGraph: {
    title: "signal",
    description: "Fully Open-sourced Online MIDI Editor",
    images: [
      {
        url: twitterCard.src,
        width: 1200,
        height: 630,
        alt: "signal",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
}

const SectionContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={`py-20 max-w-4xl w-[90%] mx-auto ${className || ""}`}>
    {children}
  </div>
)

const Section = ({
  title,
  children,
  className,
}: {
  title: React.ReactNode
  children: React.ReactNode
  className?: string
}) => (
  <section className={className}>
    <SectionContent className="flex max-md:flex-col-reverse">
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        {children}
      </div>
    </SectionContent>
  </section>
)

const StoreLink = ({
  href,
  src,
  alt,
}: {
  href: string
  src: string
  alt: string
}) => (
  <a href={href} target="_blank">
    <img
      src={src}
      alt={alt}
      className="h-12 bg-black border border-white/30 rounded transition-all duration-200 hover:border-white"
    />
  </a>
)

const SupportRow = ({
  href,
  iconSrc,
  linkText,
  description,
}: {
  href: string
  iconSrc: string
  linkText: string
  description: React.ReactNode
}) => (
  <div className="flex items-center mb-4">
    <a
      href={href}
      className="text-sm inline-flex border-2 border-gray-600 rounded px-4 py-2 text-white no-underline items-center shrink-0"
    >
      <img src={iconSrc} className="mr-3" />
      {linkText}
    </a>
    <span className="pl-4 text-sm opacity-60">{description}</span>
  </div>
)

export default function Home() {
  const t = useTranslations()

  return (
    <>
      <Navigation />

      <section className="text-white overflow-hidden">
        <SectionContent className="flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="font-extrabold text-5xl leading-none mb-4">
              {t("app-intro")}
            </h1>
            <p className="text-2xl leading-none">{t("app-desc")}</p>
            <div className="flex mt-12 items-center gap-4">
              <a
                href="/edit"
                className="bg-primary px-12 py-4 rounded-full no-underline text-text font-bold inline-block text-xl border-2 border-transparent transition-all duration-200 shadow-[0_1rem_7rem_#0000004f] flex-shrink-0 hover:bg-[color-mix(in_srgb,var(--color-primary),white_20%)]"
              >
                {t("launch")}
              </a>
              <div className="text-text-secondary text-sm">
                {t("supported-browsers-label")}
                <br />
                {t("supported-browsers-body")}
              </div>
            </div>
            <div className="mt-16">
              <p className="text-text-secondary mb-2">{t("store-intro")}</p>
              <div className="flex gap-4">
                <StoreLink
                  href="https://apps.apple.com/us/app/signal-midi-editor/id6499489458"
                  src={macAppStore.src}
                  alt="Mac App Store"
                />
                <StoreLink
                  href="https://apps.microsoft.com/store/detail/9NTLRJSL8SZC?cid=DevShareMCLPCB"
                  src={microsoftStore.src}
                  alt="Microsoft Store"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[35%]">
            <img
              src={screenshot.src}
              alt="Screenshot"
              className="md:w-[34rem] md:max-w-none rounded-lg shadow-[0_1rem_8rem_#0000004f]"
            />
          </div>
        </SectionContent>
      </section>

      <Section title={t("features")}>
        <FeatureList />
      </Section>

      <Section title={t("become-sponsor")}>
        <div className="max-w-2xl leading-relaxed mb-6">
          {t("sponsor-intro")}
        </div>

        <div>
          <a
            href="https://github.com/sponsors/ryohey"
            className="inline-flex items-center font-semibold bg-pink-500/15 rounded px-6 py-4 text-white no-underline border-2 border-transparent transition-all duration-200 hover:border-pink-500"
          >
            <img src={favoriteIcon.src} className="mr-3 w-5" />
            <span>{t("open-github-sponsors")}</span>
          </a>
        </div>
      </Section>

      <Section title={t("support")}>
        <SupportRow
          href="https://twitter.com/signalmidi"
          iconSrc={twitterIcon.src}
          linkText="@signalmidi"
          description={t("follow-twitter")}
        />

        <SupportRow
          href="https://github.com/ryohey/signal"
          iconSrc={githubIcon.src}
          linkText="ryohey/signal"
          description={t("support-github-desctiption")}
        />
      </Section>

      <Footer />

      <div
        className="fixed right-0 bottom-0"
        dangerouslySetInnerHTML={{
          __html: `
      <script
        async
        type="text/javascript"
        src="https://cdn.carbonads.com/carbon.js?serve=CESI52QY&placement=signalvercelapp"
        id="_carbonads_js"
      ></script>
  `,
        }}
      />
    </>
  )
}

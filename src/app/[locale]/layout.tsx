import { GoogleAnalytics } from "@next/third-parties/google"
import { Locale, NextIntlClientProvider } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Inter } from "next/font/google"
import "./globals.css"
import twitterCard from "./images/twitter-card.png"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t("landing-title"),
    description: t("app-intro"),
    openGraph: {
      title: t("landing-title"),
      description: t("app-intro"),
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <NextIntlClientProvider>
      <html lang="en">
        <GoogleAnalytics gaId="G-C4N96XS293" />
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  )
}

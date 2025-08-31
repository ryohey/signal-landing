import { Messages, useTranslations } from "next-intl"
import { FC } from "react"

interface FeatureProps {
  backgroundColor: string
  iconBackgroundColor: string
  iconSrc: string
  iconWidth?: string
  titleKey: Messages
  descriptionKey: Messages
}

export const Feature: FC<FeatureProps> = ({
  backgroundColor,
  iconBackgroundColor,
  iconSrc,
  iconWidth,
  titleKey,
  descriptionKey,
}) => {
  const t = useTranslations()

  return (
    <div
      className="bg-white/5 p-8 rounded-2xl shadow-[0_1rem_3rem_0_#0000000e] max-md:mr-0"
      style={{ background: backgroundColor }}
    >
      <div
        className="inline-flex w-16 rounded-[2rem] h-16 overflow-hidden bg-white items-center justify-center shadow-[0_0.5rem_3rem_0_#0000000e] [&_img]:w-8"
        style={{ background: iconBackgroundColor }}
      >
        <img src={iconSrc} style={{ width: iconWidth }} />
      </div>
      <div className="text-lg font-bold mt-4 mb-4">{t(titleKey)}</div>
      <div className="opacity-50">{t(descriptionKey)}</div>
    </div>
  )
}

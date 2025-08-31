import Localized from "../Localized"
import discordIcon from "./images/discord-icon.svg"
import githubIcon from "./images/github-icon.svg"
import logoWhite from "./images/logo-white.svg"


export const Navigation = () => {
  return (
    <header className="bg-background">
      <div className="py-8 flex justify-between items-center max-w-4xl w-[90%] mx-auto">
        <a href="/" className="flex hover:opacity-70 [&_img]:h-7">
          <img src={logoWhite.src} />
        </a>
        <div className="flex items-center gap-4 [&>a]:text-white [&>a]:no-underline [&>a]:text-sm [&>a]:hover:opacity-70">
          <a href="/support" className="mr-4">
            <Localized name="support" />
          </a>
          <a href="https://discord.com/invite/XQxzNdDJse" className="inline-flex items-center [&_img]:w-6 [&_img]:h-6 [&_img]:fill-white">
            <img src={discordIcon.src} />
          </a>
          <a href="https://github.com/ryohey/signal/" id="github-link" className="inline-flex items-center [&_img]:w-6 [&_img]:h-6 [&_img]:fill-white">
            <img src={githubIcon.src} />
          </a>
        </div>
      </div>
    </header>
  )
}

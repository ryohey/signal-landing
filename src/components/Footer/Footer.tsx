import Localized from "../Localized"

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-xs text-white opacity-50 no-underline hover:opacity-100">{children}</a>
)

export const Footer = () => {
  return (
    <footer>
      <div className="flex gap-4 py-8 justify-center items-center max-w-4xl w-full mx-auto">
        <Link href="/support">
          <Localized name="support" />
        </Link>
        <Link href="/privacy">
          <Localized name="privacy-policy-title" />
        </Link>
      </div>
    </footer>
  )
}

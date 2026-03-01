import { ASSETS } from '../constants/assets'

const FOOTER_LINKS = [
  { label: 'About Labs Festival', href: '#' },
  { label: 'Terms of use and privacy', href: '#' },
  { label: 'Send feedback', href: '#' },
]

const LEGAL_TEXT = `heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license. © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A. © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal. © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of Telecine Programação De Filmes Ltda. Paramount+ © 2024 Paramount. All rights reserved.`

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 mt-8 sm:mt-12 w-full overflow-hidden">
      <div className="section-padding py-6 sm:py-10 border border-transparent border-t border-gray-500/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-0">
          <div className="md:col-span-2 min-w-0">
            <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed break-words">{LEGAL_TEXT}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <a href="/" className="flex items-end gap-1 w-[200px] h-[40px] mt-5 pl-[55px] pr-[55px]">
              <img src={ASSETS.logo.wFestival} alt="W Labs Festival" width={55} height={55} className="flex-shrink-0 w-[55px] h-[55px] object-contain" />
              <div className="flex flex-col items-start justify-end leading-none gap-0">
                <span className="text-white text-[10px] sm:text-xs font-normal mt-0 leading-none">labs</span>
                <span className="font-semibold text-white text-[20px] leading-[18.71px] whitespace-nowrap pb-2.5 -mt-1">Festival</span>
              </div>
            </a>
            <p className="text-white/40 text-xs">©2024 Watch Brasil. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a href="#" className="h-10 block" aria-label="Download on Google Play">
                <img src={ASSETS.badges.googlePlay} alt="Get it on Google Play" className="h-10 w-auto object-contain" />
              </a>
              <a href="#" className="h-10 block" aria-label="Download on the App Store">
                <img src={ASSETS.badges.appStore} alt="Download on the App Store" className="h-10 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>

        <img src={ASSETS.social.networks} alt="Redes sociais" className="-mt-8 mb-4 pb-5" />

        <div className="flex flex-wrap gap-3 sm:gap-6 mb-4">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

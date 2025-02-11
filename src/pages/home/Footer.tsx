import { Trans } from '@lingui/macro'
import { Button } from 'antd'
import ExternalLink from 'components/ExternalLink'
import { Languages } from 'constants/languages/language-options'
import { TERMS_OF_SERVICE_URL } from 'constants/links'
import { ThemeOption } from 'constants/theme/theme-option'
import { ThemeContext } from 'contexts/themeContext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { reloadWindow, scrollToTop } from 'utils/windowUtils'
import orangeLadyOd from '/public/assets/orange_lady-od.png'
import orangeLadyOl from '/public/assets/orange_lady-ol.png'

export default function Footer() {
  const { forThemeOption } = useContext(ThemeContext)

  const link = (text: string, link: string) => {
    if (link.startsWith('http')) {
      return (
        <ExternalLink
          className="mx-2 text-haze-400 dark:text-haze-300"
          href={link}
        >
          {text}
        </ExternalLink>
      )
    }
    return (
      <Link href={link}>
        <a className="mx-2 text-haze-400 dark:text-haze-300">{text}</a>
      </Link>
    )
  }

  // Renders language links
  const languageLink = (lang: string) => (
    <Button key={lang} onClick={() => setLanguage(lang)} type="link">
      {Languages[lang].long}
    </Button>
  )

  // Sets the new language with localStorage and reloads the page
  const setLanguage = (newLanguage: string) => {
    localStorage && localStorage.setItem('lang', newLanguage)
    reloadWindow()
    scrollToTop()
  }

  const gitCommit = process.env.NEXT_PUBLIC_VERSION
  const gitCommitLink = `https://github.com/TheHistoryDAO/jbx-interface/commit/${gitCommit}`

  return (
    <div>
      <div className="-mb-3 flex justify-center">
        <Image
          src={forThemeOption?.({
            [ThemeOption.dark]: orangeLadyOd,
            [ThemeOption.light]: orangeLadyOl,
          })}
          alt="Powerlifting orange hitting an olympic deadlift"
          loading="lazy"
        />
      </div>

      <div className="bg-black p-10 text-center">
        <div className="mb-5 text-xl">🧃⚡️</div>
        <p className="m-0 text-white">
          <Trans>
            Big ups to the Ethereum community for crafting the infrastructure
            and economy to make Juicebox possible.
          </Trans>
        </p>
      </div>
      <div className="grid gap-y-5 bg-black p-7 text-center">
        <div className="mb-7 flex flex-wrap justify-center gap-y-2">
          {Object.keys(Languages).map(languageLink)}
        </div>
        <div className="mb-7 flex flex-wrap justify-center gap-y-2">
          {link('Discord', 'https://discord.gg/')}
          {link('GitHub', 'https://github.com/TheHistoryDAO/jbx-interface')}
          {link('Twitter', 'https://twitter.com/')}
          {link('Terms of Service', TERMS_OF_SERVICE_URL)}
        </div>

        {gitCommit ? (
          <span className="text-white">
            Version:{' '}
            <ExternalLink href={gitCommitLink} className="text-sm">
              #{gitCommit}
            </ExternalLink>
          </span>
        ) : null}
      </div>
    </div>
  )
}

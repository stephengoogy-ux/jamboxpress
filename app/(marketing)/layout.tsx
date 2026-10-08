import type { ReactNode } from 'react'
import { DM_Sans, Newsreader } from 'next/font/google'
import { SiteFooter } from '@/components/marketing/site-footer'
import { SiteHeader } from '@/components/marketing/site-header'

const siteSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-site-sans',
})

const siteSerif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-site-serif',
})

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`marketing-site ${siteSans.variable} ${siteSerif.variable}`}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

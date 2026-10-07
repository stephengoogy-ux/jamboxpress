'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, HeartHandshake, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Government & non-profit', href: '/organizations' },
]

function isCurrentPage(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="site-brand" href="/" aria-label="Lifeline home">
          <span className="site-brand__mark" aria-hidden="true"><HeartHandshake size={22} strokeWidth={1.7} /></span>
          <span className="site-brand__copy">
            <strong>Lifeline</strong>
            <small>COMMUNITY CARE &amp; HOME SERVICES</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => {
            const active = isCurrentPage(pathname, href)
            return (
              <Link
                className={`site-nav__link${active ? ' is-active' : ''}`}
                href={href}
                aria-current={active ? 'page' : undefined}
                key={href}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__contact" href="/contact">Talk to our team</Link>
          <Link className="site-button site-button--header" href="/contact">
            Request support <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className="site-mobile-panel"
        id="mobile-navigation"
        hidden={!isMenuOpen}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setIsMenuOpen(false)
        }}
      >
        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          {navigation.map(({ label, href }) => {
            const active = isCurrentPage(pathname, href)
            return (
              <Link
                className={`site-nav__link${active ? ' is-active' : ''}`}
                href={href}
                aria-current={active ? 'page' : undefined}
                key={href}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            )
          })}
          <Link className="site-button" href="/contact" onClick={() => setIsMenuOpen(false)}>
            Request support <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

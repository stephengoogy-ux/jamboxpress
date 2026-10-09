'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'

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
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <a className="site-skip-link" href="#main-content">Skip to main content</a>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key !== 'Escape' || !isMenuOpen) return
          event.preventDefault()
          setIsMenuOpen(false)
          menuToggleRef.current?.focus()
        }}
      >
      <div className="site-container site-header__inner">
        <Link className="site-brand" href="/" aria-label="Lifeline home">
          <Image className="site-brand__logo" src="/lifeline-logo.png" alt="Lifeline Community Care and Home Services Coop" width={245} height={86} priority />
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
          <Link className="site-button site-button--header" href="/contact">
            Talk to our team <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          ref={menuToggleRef}
          className="site-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div className="site-mobile-panel" id="mobile-navigation" hidden={!isMenuOpen}>
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
            Talk to our team <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
      </header>
    </>
  )
}

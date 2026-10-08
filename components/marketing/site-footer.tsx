import Link from 'next/link'
import { Activity, Mail, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__main">
        <div className="site-footer__brand">
          <Link className="site-brand site-brand--footer" href="/" aria-label="Lifeline home">
            <span className="site-brand__mark" aria-hidden="true"><Activity size={22} strokeWidth={1.7} /></span>
            <span className="site-brand__copy">
              <strong>Lifeline</strong>
              <small>COMMUNITY CARE &amp; HOME SERVICES</small>
            </span>
          </Link>
          <p>Care, support and practical services for stronger people and communities.</p>
          <div className="site-footer__detail"><MapPin size={16} aria-hidden="true" /><span>Victoria, Vancouver Island and communities across Canada</span></div>
          <a className="site-footer__detail" href="mailto:hello@lifelinecooperative.org"><Mail size={16} aria-hidden="true" /><span>hello@lifelinecooperative.org</span></a>
        </div>

        <div className="site-footer__column">
          <h2>Explore</h2>
          <Link href="/about">About Lifeline</Link>
          <Link href="/services">Our services</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/organizations">Government &amp; non-profit</Link>
        </div>

        <div className="site-footer__column">
          <h2>Get started</h2>
          <Link href="/contact?audience=family">Care and home support</Link>
          <Link href="/contact?audience=organization">Organization enquiries</Link>
          <Link href="/contact?audience=careers">Careers and opportunities</Link>
          <a href="mailto:hello@lifelinecooperative.org">Email our team</a>
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <span>© {new Date().getFullYear()} Lifeline Community Care &amp; Home Services</span>
        <span>Built around people. Rooted in community.</span>
      </div>
    </footer>
  )
}

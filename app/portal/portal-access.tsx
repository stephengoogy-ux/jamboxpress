'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, LockKeyhole } from 'lucide-react'

export function PortalAccess({ audience, title, description }: { audience: string; title: string; description: string }) {
  return <main className="platform-page"><section className="platform-hero"><div className="site-container platform-hero__grid"><div><Link className="text-link portal-back" href="/portal"><ArrowLeft size={15}/>Back to portal</Link><p className="platform-kicker">{audience}</p><h1>{title}</h1><p className="platform-lead">{description}</p><Link className="site-button site-button--dark" href="/contact">Request access <ArrowRight size={16}/></Link></div><div className="platform-hero-card"><LockKeyhole size={28}/><b>Access is invitation-only</b><span>Contact the Lifeline team if you need an account or help finding the right access point.</span></div></div></section></main>
}

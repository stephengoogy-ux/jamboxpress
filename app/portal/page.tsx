import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, LockKeyhole, UsersRound } from 'lucide-react'

export const metadata: Metadata = { title: 'Lifeline portal', description: 'Secure access for Lifeline members, employees and clients.' }

const portals = [['Member and client portal','View your support plan, requests, documents and upcoming visits.','/contact?audience=family',UsersRound],['Employee portal','Access onboarding, schedules, documents and team resources.','/careers',BriefcaseBusiness],['Administrator access','Manage intake, plans, scheduling, contracts and service operations.','/admin',LockKeyhole]] as const

export default function PortalPage() { return <main className="platform-page"><section className="platform-hero"><div className="site-container platform-hero__grid"><div><p className="platform-kicker">LIFELINE PORTAL</p><h1>One secure place for the work <em>behind care.</em></h1><p className="platform-lead">Choose the access point that fits your relationship with Lifeline. New users can start with our team and we will guide the next step.</p></div><div className="platform-hero-card"><LockKeyhole size={28}/><b>Secure by design</b><span>Your portal is the place for private records, plans, schedules and documents.</span></div></div></section><section className="platform-section"><div className="site-container portal-grid">{portals.map(([title, description, href, Icon]) => <article className="portal-card" key={title}><Icon size={22}/><h2>{title}</h2><p>{description}</p><Link className="text-link" href={href}>Continue <ArrowRight size={15}/></Link></article>)}</div></section></main> }

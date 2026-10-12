import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { careerAreas, editorialPhotos } from '@/components/marketing/content'

export const metadata: Metadata = {
  title: 'Careers | Lifeline',
  description: 'Explore meaningful work across care, home services and community support with Lifeline.',
}

export default function CareersPage() {
  return (
    <main id="main-content" className="careers-modern" tabIndex={-1}>
      <section className="careers-hero">
        <div className="site-container careers-hero__inner">
          <div className="careers-hero__copy">
            <p className="careers-kicker">WORK WITH PURPOSE</p>
            <h1>Build your future <em>with us.</em></h1>
            <p className="careers-lead">Bring your strengths to work that makes everyday life better for people at home, in workplaces and across the community.</p>
            <Link className="site-button" href="#open-positions">Explore open positions <ArrowRight size={16} aria-hidden="true" /></Link>
            <p className="careers-hero__note">Roles, requirements and availability vary by area of work.</p>
          </div>
          <div className="careers-hero__image"><img src={editorialPhotos.careers.src} alt="Lifeline team member supporting someone in the community" /><span>People-first work, every day.</span></div>
        </div>
      </section>

      <section className="careers-values" aria-labelledby="values-title"><div className="site-container"><div className="careers-section-intro"><p className="careers-kicker">WHY LIFELINE</p><h2 id="values-title">Good work starts with <em>good people.</em></h2></div><div className="careers-values__grid"><article><HeartHandshake size={21}/><h3>Lead with care</h3><p>Listen closely, respect each person and make support feel personal.</p></article><article><ShieldCheck size={21}/><h3>Work with trust</h3><p>Clear standards and thoughtful coordination help people feel safe.</p></article><article><Users size={21}/><h3>Grow together</h3><p>Different strengths make better teams and more connected communities.</p></article></div></div></section>

      <section className="careers-positions" id="open-positions" aria-labelledby="positions-title"><div className="site-container"><div className="careers-section-intro careers-section-intro--wide"><p className="careers-kicker">OPEN POSITIONS</p><h2 id="positions-title">Find where your skills can <em>help most.</em></h2><p>We welcome conversations across care, home services, community support and coordination. Select an area to tell us what interests you and learn about fit, requirements and availability.</p></div><div className="careers-job-list">{careerAreas.map((area) => <article className="careers-job" key={area.number}><div className="careers-job__number">{area.number}</div><div className="careers-job__content"><p>{area.title}</p><h3>{area.description}</h3><div><span>Meaningful work</span><span>Multiple settings</span></div></div><Link className="careers-job__action" href={`/contact?audience=careers&interest=${encodeURIComponent(area.title)}`} aria-label={`View ${area.title} opportunities`}>View position <ArrowRight size={16} aria-hidden="true" /></Link></article>)}</div></div></section>

      <section className="careers-culture"><div className="site-container careers-culture__inner"><div className="careers-culture__image"><img src={editorialPhotos.careers.src} alt="A person connecting with their community" /></div><div><p className="careers-kicker">OUR CULTURE</p><h2>Bring your whole self to <em>meaningful work.</em></h2><p>Our work is practical, human and connected to real daily life. Whether you are supporting a client, helping a household run well or coordinating a community service, your attention and reliability matter.</p><p>We are interested in what you know, what you want to learn and the setting where you do your best work.</p><Link className="text-link" href="/contact?audience=careers">Start a career conversation <ArrowRight size={15} aria-hidden="true" /></Link></div></div></section>

      <section className="careers-final careers-final--bold"><div className="site-container careers-final__inner"><div><Sparkles size={20} aria-hidden="true" /><p className="careers-kicker">READY TO EXPLORE?</p><h2>Your next chapter starts <em>here.</em></h2><p className="careers-final__lead">Tell us what kind of work you want to do and we&apos;ll help you find the right place to begin.</p></div><Link className="site-button site-button--light" href="/contact?audience=careers">Start your application <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  )
}

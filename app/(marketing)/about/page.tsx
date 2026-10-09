import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { commitments, editorialPhotos, serviceSteps } from '@/components/marketing/content'
import { ContactCallout, Eyebrow, InfoCard, PageHero, SectionHeading } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'About Lifeline',
  description: 'Learn about Lifeline’s person-centred approach to care, home services and community support.',
}

export default function AboutPage() {
  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <PageHero
        eyebrow="ABOUT LIFELINE"
        title={<>Care that sees the <em>whole person.</em></>}
        description="We bring care, home services and community support together with one purpose: helping people feel respected, supported and connected in everyday life."
        image={editorialPhotos.about}
      />

      <section className="about-intro">
        <div className="site-container about-intro__grid">
          <div>
            <Eyebrow>OUR CO-OPERATIVE</Eyebrow>
            <h2>Good support starts by <em>understanding what matters.</em></h2>
          </div>
          <div className="about-intro__copy">
            <p>Lifeline is a community care co-operative that brings care, home services and community support into one conversation. We start by listening to the person, family or organization and learning what matters in the day-to-day setting.</p>
            <p>That may mean personal care, companionship or respite; housekeeping, meals and other practical help at home; or facility, workforce and contracted support for an organization or community program.</p>
            <p>A useful plan depends on context: routines and preferences, the setting, existing supports and the priorities of the people involved. We aim to keep the conversation respectful and the next step clear.</p>
          </div>
        </div>
      </section>

      <section className="marketing-section commitment-section" aria-label="Lifeline commitments">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title={<>The way we work is part of <em>the care.</em></>}
            copy="A thoughtful service experience is built through everyday actions: listening well, following through and communicating clearly."
          />
          <div className="commitment-grid">
            {commitments.map((item) => <InfoCard {...item} key={item.number} />)}
          </div>
        </div>
      </section>

      <section className="marketing-section about-principles" aria-labelledby="about-principles-title">
        <div className="site-container about-principles__grid">
          <div>
            <Eyebrow>WHAT THE NAME MEANS</Eyebrow>
            <h2 id="about-principles-title">A lifeline is practical, <em>human support.</em></h2>
          </div>
          <div className="about-principles__copy">
            <p>The Lifeline mark brings together a home, a heart and open hands. It reflects the kind of support we aim to make easier to find: care that respects the person, practical help that fits real routines, and services that strengthen community.</p>
            <p>As a co-operative, Lifeline is focused on useful relationships rather than one-size-fits-all solutions. The first step is always a conversation about the people, place and priorities involved.</p>
          </div>
        </div>
      </section>

      <section className="marketing-section audience-section" aria-labelledby="about-pathways-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="SUPPORT IN PRACTICE"
            titleId="about-pathways-title"
            title={<>Different needs, <em>one place to start.</em></>}
            copy="Lifeline works with people, families and organizations. Explore the route closest to your situation, or contact us if your needs span more than one area."
          />
          <div className="audience-grid">
            <Link className="audience-card" href="/services#care-support">
              <span className="audience-card__number" aria-hidden="true">01</span>
              <h3>People and families</h3>
              <p>Personal care, companionship, respite and practical help at home can support everyday routines and independence.</p>
              <span className="audience-card__link">Explore personal support<ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
            <Link className="audience-card" href="/services#home-support">
              <span className="audience-card__number" aria-hidden="true">02</span>
              <h3>Homes and everyday life</h3>
              <p>Housekeeping, meals, errands and other practical tasks can make home feel more manageable.</p>
              <span className="audience-card__link">Explore home services<ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
            <Link className="audience-card" href="/organizations">
              <span className="audience-card__number" aria-hidden="true">03</span>
              <h3>Organizations and communities</h3>
              <p>Workforce, facility, cleaning and community services can support teams delivering programs and services.</p>
              <span className="audience-card__link">Explore partnerships<ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-process" aria-labelledby="about-process-title">
        <div className="site-container about-process__grid">
          <div className="about-process__intro">
            <Eyebrow>HOW WE BEGIN</Eyebrow>
            <h2 id="about-process-title">Clear steps. <em>Thoughtful support.</em></h2>
            <p>Every request is different. We take time to understand it, coordinate the right resources and keep communication open as support begins.</p>
          </div>
          <div className="home-process__steps">
            {serviceSteps.map((step) => (
              <div className="home-process__step" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCallout
        title={<>Let&apos;s talk about the support <em>that feels right.</em></>}
        description="Tell us a little about what you are looking for and we will help you find the right next step."
      />
    </main>
  )
}

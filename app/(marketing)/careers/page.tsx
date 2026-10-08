import type { Metadata } from 'next'
import { careerAreas } from '@/components/marketing/content'
import { ContactCallout, InfoCard, PageHero, SectionHeading, TextLink } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore meaningful work across care, home services and community support with Lifeline.',
}

export default function CareersPage() {
  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <PageHero
        eyebrow="WORK WITH PURPOSE"
        title={<>Make a difference in <em>everyday life.</em></>}
        description="We are building opportunities for people who want to make a practical difference for individuals, families and communities."
        image={{ src: '/lifeline-editorial-careers.png', alt: 'Care and community-support professionals in a shift handover conversation' }}
      />

      <section className="marketing-section career-section" aria-label="Career areas at Lifeline">
        <div className="site-container">
          <SectionHeading
            eyebrow="AREAS OF WORK"
            title={<>Bring your strengths to <em>meaningful work.</em></>}
            copy="Lifeline brings different skills together to support people at home, in workplaces and across the community."
          />
          <div className="commitment-grid career-areas">
            {careerAreas.map((area) => <InfoCard {...area} key={area.number} />)}
          </div>
        </div>
      </section>

      <section className="career-note">
        <div className="site-container career-note__inner">
          <div>
            <p className="career-note__label">INTERESTED IN JOINING US?</p>
            <h2>Let&apos;s start with <em>a conversation.</em></h2>
            <p>Tell us a little about your experience and the kind of work you are interested in. Our team can share the right next step.</p>
          </div>
          <TextLink href="mailto:hello@lifelinecooperative.org?subject=Career%20opportunities">Email us about careers</TextLink>
        </div>
      </section>

      <ContactCallout
        eyebrow="MAKE AN IMPACT WITH LIFELINE"
        title={<>Good work can make <em>everyday life better.</em></>}
        description="Reach out to learn more about opportunities across care, home services and community support."
        action="Get in touch"
      />
    </main>
  )
}

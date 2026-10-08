import type { Metadata } from 'next'
import { careerAreas, editorialPhotos } from '@/components/marketing/content'
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
        description="Explore work across care, home services and community support. Specific roles, requirements and availability can vary; start a conversation to learn what may fit your experience and interests."
        image={editorialPhotos.careers}
        primaryHref="/contact?audience=careers"
        primaryAction="Ask about careers"
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
            <p>Roles, requirements and availability vary. When you write, tell us which area interests you, any relevant experience or training, and location or schedule considerations. Our team can share the appropriate next step and any role-specific details.</p>
          </div>
          <TextLink href="/contact?audience=careers">Open a career email draft</TextLink>
        </div>
      </section>

      <ContactCallout
        eyebrow="MAKE AN IMPACT WITH LIFELINE"
        title={<>Good work can make <em>everyday life better.</em></>}
        description="Tell us which area interests you and the email draft will start with a careers subject line. Add only the details you are comfortable sharing."
        action="Ask about opportunities"
        actionHref="/contact?audience=careers"
      />
    </main>
  )
}

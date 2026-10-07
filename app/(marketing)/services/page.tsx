import type { Metadata } from 'next'
import { serviceItems } from '@/components/marketing/content'
import { ContactCallout, PageHero, SectionHeading, ServiceCard } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Lifeline care, home support, housekeeping, community and organization services.',
}

export default function ServicesPage() {
  return (
    <main className="marketing-main">
      <PageHero
        eyebrow="OUR SERVICES"
        title={<>One team for care, home <em>&amp; community.</em></>}
        description="Explore practical, respectful support for people and families, plus dependable services for workplaces, facilities and community organizations."
        image={{ src: '/lifeline-cleaning.png', alt: 'A team member providing professional cleaning in a bright interior' }}
        secondaryHref="#service-list"
        secondaryLabel="Explore all services"
      />

      <section className="marketing-section service-catalog" id="service-list" aria-label="Lifeline service catalog">
        <div className="site-container">
          <SectionHeading
            eyebrow="FIND THE RIGHT SUPPORT"
            title={<>Services shaped around <em>real needs.</em></>}
            copy="Choose a service to start a conversation. We will work with you to understand the request and coordinate the right next step."
          />
          <div className="service-grid service-grid--catalog">
            {serviceItems.map((service) => <ServiceCard service={service} key={service.number} />)}
          </div>
        </div>
      </section>

      <ContactCallout
        eyebrow="NOT SURE WHERE TO START?"
        title={<>Let&apos;s figure out the <em>right fit together.</em></>}
        description="Tell us what you are looking for. Our team can help you understand the service options and the next step."
        action="Ask our team"
      />
    </main>
  )
}

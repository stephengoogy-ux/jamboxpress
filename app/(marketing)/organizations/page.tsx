import type { Metadata } from 'next'
import { organizationTypes } from '@/components/marketing/content'
import { ContactCallout, InfoCard, PageHero, SectionHeading } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Government and non-profit services',
  description: 'Flexible staffing, cleaning and community support for government, non-profits, facilities and businesses.',
}

export default function OrganizationsPage() {
  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <PageHero
        eyebrow="FOR ORGANIZATIONS"
        title={<>Dependable support for <em>the work you do.</em></>}
        description="Lifeline partners with government, non-profits, facilities and businesses to coordinate dependable people, cleaning services and community support."
        image={{ src: '/lifeline-editorial-partners.png', alt: 'Two community-service partners discussing a plan in a bright workspace' }}
      />

      <section className="marketing-section organization-section" aria-label="Organization services">
        <div className="site-container">
          <SectionHeading
            eyebrow="PARTNERSHIPS &amp; CONTRACTS"
            title={<>Flexible services, built <em>around your needs.</em></>}
            copy="From a specific staffing need to a wider community program, we work with partners to shape practical services and clear coordination."
          />
          <div className="commitment-grid organization-grid">
            {organizationTypes.map((item) => <InfoCard {...item} key={item.number} />)}
          </div>
        </div>
      </section>

      <section className="organization-detail">
        <div className="site-container organization-detail__inner">
          <div>
            <p className="career-note__label">A PRACTICAL PARTNER</p>
            <h2>People, services and coordination—<em>working together.</em></h2>
          </div>
          <p>We can bring facility and workforce support, commercial housekeeping and community services together to meet the needs of an organization or contract. Share your goals with us and we can discuss a suitable approach.</p>
        </div>
      </section>

      <ContactCallout
        eyebrow="LET’S BUILD A PARTNERSHIP"
        title={<>Tell us what your organization <em>needs to accomplish.</em></>}
        description="Start a conversation about service delivery, staffing, cleaning or community program support."
        action="Discuss a partnership"
      />
    </main>
  )
}

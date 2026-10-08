import type { Metadata } from 'next'
import { organizationTypes } from '@/components/marketing/content'
import { ContactCallout, Eyebrow, InfoCard, PageHero, SectionHeading } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Government and non-profit services',
  description: 'Flexible staffing, cleaning and community support for government, non-profits, facilities and businesses.',
}

const partnershipSteps = [
  {
    number: '01',
    title: 'Describe the setting',
    description: 'Let us know whether you are planning for a facility, workplace, public service or community program.',
  },
  {
    number: '02',
    title: 'Share your priorities',
    description: 'Outline the service you need, who it supports and any timing or coordination considerations.',
  },
  {
    number: '03',
    title: 'Explore scope and fit',
    description: 'Discuss a practical service approach, the details to confirm and a clear next conversation.',
  },
]

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
          <p>Depending on your setting, Lifeline can discuss contracted housekeeping, facility and workforce support, and community services—individually or as connected parts of a broader need. A useful conversation starts with the people you serve, the setting and the work you need covered, then explores scope, scheduling and coordination.</p>
        </div>
      </section>

      <section className="home-process" aria-labelledby="organization-process-title">
        <div className="site-container home-process__grid">
          <div className="home-process__copy">
            <Eyebrow>PLANNING A PARTNERSHIP</Eyebrow>
            <h2 id="organization-process-title">Bring the context. <em>Explore the fit.</em></h2>
            <p>You can start with a service challenge or an idea, rather than a finished scope. Sharing the setting, the people served and the outcome you are working toward helps make the first conversation useful.</p>
          </div>
          <div className="home-process__steps">
            {partnershipSteps.map((step) => (
              <div className="home-process__step" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </div>
            ))}
          </div>
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

import type { Metadata } from 'next'
import { editorialPhotos, organizationTypes } from '@/components/marketing/content'
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
        image={editorialPhotos.organizations}
        primaryHref="/contact?audience=organization"
        primaryAction="Discuss a partnership"
      />

      <section className="marketing-section organization-guide" aria-labelledby="organization-guide-title">
        <div className="site-container organization-guide__grid">
          <div><Eyebrow>WORKING TOGETHER</Eyebrow><h2 id="organization-guide-title">Useful support starts with <em>shared context.</em></h2></div>
          <div className="organization-guide__copy"><p>Organizations know their people, programs and operating environment best. Lifeline brings service experience and practical coordination to the conversation.</p><p>Whether you are planning a contract, reviewing a service gap or exploring a community partnership, we can begin with the setting and the outcome you are working toward.</p></div>
        </div>
      </section>

      <section className="marketing-section organization-details" aria-labelledby="organization-details-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHERE WE CAN HELP"
            titleId="organization-details-title"
            title={<>Start with the work your organization <em>needs covered.</em></>}
            copy="The right conversation depends on your setting. These are useful starting points for planning a service or partnership discussion."
          />
          <div className="organization-details__grid">
            <article><h3>People and coverage</h3><p>Discuss workforce, staffing, coordination or support needs connected to the people you serve.</p></article>
            <article><h3>Places and operations</h3><p>Discuss cleaning, housekeeping, facility routines and the practical work that keeps a setting ready.</p></article>
            <article><h3>Programs and community</h3><p>Discuss community services, contracted support and the outcomes your program is working toward.</p></article>
          </div>
        </div>
      </section>

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
        description="Start with the setting, the people you serve and the service you are exploring. The next step opens a prepared email draft for you to review."
        action="Discuss a partnership"
        actionHref="/contact?audience=organization"
      />
    </main>
  )
}

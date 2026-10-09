import type { Metadata } from 'next'
import { commitments, editorialPhotos, serviceItems, serviceSteps } from '@/components/marketing/content'
import { ContactCallout, Eyebrow, PageHero, PrimaryLink, SectionHeading, ServiceCard } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Lifeline care, home support, housekeeping, community and organization services.',
}

const serviceGroups = [
  {
    id: 'care-support',
    label: 'Care & personal support',
    eyebrow: '01 / CARE & PERSONAL SUPPORT',
    title: 'Care and personal support',
    description: 'Explore personal care, caregiver services, companionship, dementia support, respite and help after a hospital stay.',
    categories: ['Care and support'],
  },
  {
    id: 'home-support',
    label: 'Home & everyday support',
    eyebrow: '02 / HOME & EVERYDAY SUPPORT',
    title: 'Home and everyday support',
    description: 'Housekeeping, meals, transportation and errands can make day-to-day life at home feel more manageable.',
    categories: ['Home services'],
  },
  {
    id: 'organization-support',
    label: 'Organizations & communities',
    eyebrow: '03 / ORGANIZATIONS & COMMUNITIES',
    title: 'Organizations and communities',
    description: 'Find professional cleaning, workforce and contracted services, plus practical community support programs.',
    categories: ['Workplace services', 'Community services', 'Organization support'],
  },
]

export default function ServicesPage() {
  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <PageHero
        eyebrow="OUR SERVICES"
        title={<>One team for care, home <em>&amp; community.</em></>}
        description="Explore practical, respectful support for people and families, plus dependable services for workplaces, facilities and community organizations."
        image={editorialPhotos.services}
        primaryAction="Ask about services"
        secondaryHref="#service-list"
        secondaryLabel="Browse by service"
      />

      <section className="marketing-section service-guide" aria-labelledby="service-guide-title">
        <div className="site-container service-guide__grid">
          <div><Eyebrow>CHOOSING A SERVICE</Eyebrow><h2 id="service-guide-title">Start with the outcome, <em>not the label.</em></h2></div>
          <div className="service-guide__copy"><p>You may know that a family member needs more help at home, that a facility needs reliable coverage, or that a community program needs practical support. You do not need to know the formal service name before you contact us.</p><p>Tell us what is happening, who is involved and what would make the situation easier. We can help identify the most relevant service area and the details to discuss next.</p></div>
        </div>
      </section>

      <section className="marketing-section service-details" aria-labelledby="service-details-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="A CLEARER START"
            titleId="service-details-title"
            title={<>What to have ready for a <em>useful conversation.</em></>}
            copy="You can contact us before every detail is decided. These starting points simply help us understand the situation faster."
          />
          <div className="service-details__grid">
            <article><span>01</span><h3>Who needs support?</h3><p>Tell us whether you are reaching out for yourself, a family member, a team, a facility or a community program.</p></article>
            <article><span>02</span><h3>What would help?</h3><p>Share the task, routine or service gap you want to make easier, even if you do not know its formal name.</p></article>
            <article><span>03</span><h3>What timing matters?</h3><p>Include any timing, location or coordination details that would shape the next conversation.</p></article>
          </div>
        </div>
      </section>

      <section className="service-confidence" aria-label="What guides Lifeline services">
        <div className="site-container service-confidence__grid">
          {commitments.slice(0, 3).map(({ number, title, description, icon: Icon }) => (
            <div className="service-confidence__item" key={number}>
              <span><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-section service-catalog" id="service-list" aria-labelledby="service-catalog-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="FIND THE RIGHT SUPPORT"
            titleId="service-catalog-title"
            title={<>Explore options by <em>what you need.</em></>}
            copy="Use the categories as a starting point. If you are unsure, begin with what you want to make easier; the steps below explain how to find a clear next step."
          />
          <nav className="service-category-nav" aria-label="Jump to a service group">
            {serviceGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.label}<span aria-hidden="true">↓</span></a>)}
          </nav>
          <div className="service-group-list">
            {serviceGroups.map((group) => {
              const groupServices = serviceItems.filter((service) => group.categories.includes(service.category))

              return (
                <section className="service-group" id={group.id} aria-labelledby={`${group.id}-title`} key={group.id}>
                  <SectionHeading
                    eyebrow={group.eyebrow}
                    titleId={`${group.id}-title`}
                    title={group.title}
                    copy={group.description}
                  />
                  <div className="service-grid service-grid--catalog">
                    {groupServices.map((service) => <ServiceCard service={service} key={service.number} />)}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-process" aria-labelledby="service-process-title">
        <div className="site-container home-process__grid">
          <div className="home-process__copy">
            <Eyebrow>HOW TO GET STARTED</Eyebrow>
            <h2 id="service-process-title">You don&apos;t need the <em>right service name.</em></h2>
            <p>Start with the situation: who needs support, what would make everyday life or service delivery easier, and any practical details you already know. Together, we can work out what to explore next.</p>
            <PrimaryLink href="/contact">Talk through your needs</PrimaryLink>
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
        eyebrow="NOT SURE WHERE TO START?"
        title={<>Let&apos;s figure out the <em>right fit together.</em></>}
        description="Tell us what you are looking for. Our team can help you understand the service options and the next step."
        action="Ask our team"
      />
    </main>
  )
}

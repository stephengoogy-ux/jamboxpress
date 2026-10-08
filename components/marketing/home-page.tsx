import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredServices, serviceSteps } from './content'
import { HomeHero } from './home-hero'
import { ContactCallout, Eyebrow, PrimaryLink, SectionHeading, ServiceCard } from './marketing-primitives'

const supportAreas = [
  {
    number: '01',
    title: 'Individuals & families',
    description: 'Care, companionship, respite and practical help at home, shaped around your routines.',
    href: '/services#care-support',
    label: 'Explore personal support',
  },
  {
    number: '02',
    title: 'Organizations',
    description: 'Dependable staffing, commercial cleaning and contracted support for your team.',
    href: '/organizations',
    label: 'Explore organization services',
  },
  {
    number: '03',
    title: 'Communities',
    description: 'Community programs and practical services that help people feel connected.',
    href: '/services#organization-support',
    label: 'Explore community support',
  },
]

export function HomePage() {
  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <HomeHero />

      <section className="home-credibility" aria-label="Lifeline at a glance">
        <div className="site-container">
          <dl className="home-credibility__grid">
            <div className="home-credibility__item">
              <dt>ORGANIZATION</dt>
              <dd>A community care co-operative</dd>
            </div>
            <div className="home-credibility__item">
              <dt>SERVICES</dt>
              <dd>Care, home services &amp; community support</dd>
            </div>
            <div className="home-credibility__item">
              <dt>SERVICE AREA</dt>
              <dd>Victoria, Vancouver Island and communities across Canada</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="marketing-section audience-section" id="support-paths" aria-labelledby="audience-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="START HERE"
            titleId="audience-title"
            title={<>What brings you here <em>today?</em></>}
            copy="Choose the path closest to what you need. You can always explore the full service list or get in touch if you are unsure."
          />
          <div className="audience-grid">
            {supportAreas.map((area) => (
              <Link className="audience-card" href={area.href} key={area.number}>
                <span className="audience-card__number" aria-hidden="true">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="audience-card__link">{area.label}<ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section home-services" aria-label="Featured services">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title={<>Practical help, <em>thoughtfully coordinated.</em></>}
            copy="Flexible support for people, homes, workplaces and communities, shaped around what each situation calls for."
            actionHref="/services"
            actionLabel="View all services"
          />
          <div className="service-grid service-grid--preview">
            {featuredServices.map((service) => <ServiceCard service={service} key={service.number} />)}
          </div>
        </div>
      </section>

      <section className="home-process" aria-labelledby="home-process-title">
        <div className="site-container home-process__grid">
          <div className="home-process__copy">
            <Eyebrow>A SIMPLE START</Eyebrow>
            <h2 id="home-process-title">Good support begins <em>with listening.</em></h2>
            <p>We make the next step clear, so you can focus on what matters and we can work out the right support together.</p>
            <PrimaryLink href="/contact">Start a conversation</PrimaryLink>
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
        eyebrow="LET’S FIND THE RIGHT NEXT STEP"
        title={<>Here to help, wherever <em>life happens.</em></>}
        description="Choose the path that fits. Each option opens a prepared email draft to Lifeline; review it and send only when you are ready."
        action="For families and individuals"
        actionHref="/contact?audience=family"
        secondaryAction="For organizations"
        secondaryHref="/contact?audience=organization"
      />
    </main>
  )
}

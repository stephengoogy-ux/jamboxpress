import Image from 'next/image'
import Link from 'next/link'
import { Check, HeartHandshake } from 'lucide-react'
import { commitments, featuredServices, serviceSteps } from './content'
import { ContactCallout, Eyebrow, InfoCard, PrimaryLink, SectionHeading, ServiceCard, TextLink } from './marketing-primitives'

const supportAreas = [
  {
    number: '01',
    title: 'Individuals and families',
    description: 'Person-centred care, respite, companionship and practical help at home.',
    href: '/services',
    label: 'Explore care services',
  },
  {
    number: '02',
    title: 'Organizations',
    description: 'Flexible cleaning, staffing and contracted services for partner organizations.',
    href: '/organizations',
    label: 'Explore partnerships',
  },
  {
    number: '03',
    title: 'Communities',
    description: 'Programs and practical support that help people feel connected and supported.',
    href: '/organizations',
    label: 'See community support',
  },
]

export function HomePage() {
  return (
    <main className="marketing-main">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="site-container home-hero__grid">
          <div className="home-hero__copy">
            <Eyebrow>Care, home support &amp; community services</Eyebrow>
            <h1 id="home-hero-title">Support for real life.<br /><em>In every space.</em></h1>
            <p className="home-hero__lead">Thoughtful care at home, dependable housekeeping and community services, brought together around the people who matter.</p>
            <div className="home-hero__actions">
              <PrimaryLink href="/contact">Request support</PrimaryLink>
              <TextLink href="/services">Explore our services</TextLink>
            </div>
            <div className="home-hero__proof" aria-label="Lifeline service principles">
              <span><Check size={15} aria-hidden="true" /> Person-centred</span>
              <span><Check size={15} aria-hidden="true" /> Dependable</span>
              <span><Check size={15} aria-hidden="true" /> Community-minded</span>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__image-frame">
              <Image
                src="/lifeline-care.png"
                alt="A caregiver sharing a warm moment with an older adult at home"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 54vw"
              />
              <div className="home-hero__image-label"><span>Support that feels personal</span><span>Care at every stage</span></div>
            </div>
            <div className="home-hero__floating-card">
              <span className="home-hero__floating-icon"><HeartHandshake size={22} aria-hidden="true" /></span>
              <span><small>OUR APPROACH</small><strong>Respectful, reliable, human.</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro" aria-label="Lifeline at a glance">
        <div className="site-container home-intro__grid">
          <div className="home-intro__statement">
            <span className="home-intro__index">01 / A more connected kind of support</span>
            <h2>One trusted team.<br /><em>Many ways to help.</em></h2>
          </div>
          <p>From individuals and families to facilities, businesses, non-profits and community organizations, Lifeline brings practical support together where it matters most.</p>
          <Link className="home-intro__arrow" href="/about" aria-label="Learn about Lifeline"><span>Get to know Lifeline</span><span><Check size={18} aria-hidden="true" /></span></Link>
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

      <section className="home-story" aria-labelledby="home-story-title">
        <div className="site-container home-story__grid">
          <div className="home-story__visual">
            <Image
              src="/lifeline-home.png"
              alt="A home support worker assisting someone in a bright living room"
              fill
              sizes="(max-width: 850px) 100vw, 50vw"
            />
            <span className="home-story__image-note">Care begins with listening.</span>
          </div>
          <div className="home-story__copy">
            <Eyebrow>PERSON-CENTRED BY DESIGN</Eyebrow>
            <h2 id="home-story-title">Support that respects <em>the individual.</em></h2>
            <p>Every person has different routines, preferences and needs. We focus on practical, respectful support that helps people feel comfortable, connected and as independent as possible.</p>
            <ul className="home-story__list">
              {commitments.map((item) => (
                <li key={item.number}><span><Check size={14} aria-hidden="true" /></span>{item.title}</li>
              ))}
            </ul>
            <TextLink href="/about">Learn about our approach</TextLink>
          </div>
        </div>
      </section>

      <section className="marketing-section audience-section" aria-labelledby="audience-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHO WE SUPPORT"
            titleId="audience-title"
            title={<>Support for the people and <em>places that matter.</em></>}
            copy="Different needs call for different kinds of help. We bring the right services together for each person, family or partner."
          />
          <div className="audience-grid">
            {supportAreas.map((area) => (
              <article className="audience-card" key={area.number}>
                <span className="audience-card__number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <Link href={area.href} className="marketing-text-link">{area.label}<span aria-hidden="true">→</span></Link>
              </article>
            ))}
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

      <section className="marketing-section home-commitments" aria-labelledby="home-commitments-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="THE LIFELINE DIFFERENCE"
            titleId="home-commitments-title"
            title={<>The little things are <em>the big things.</em></>}
            copy="Trust is built through respectful care, thoughtful coordination and dependable communication."
            actionHref="/about"
            actionLabel="More about Lifeline"
          />
          <div className="commitment-grid">
            {commitments.map((item) => <InfoCard {...item} key={item.number} />)}
          </div>
        </div>
      </section>

      <ContactCallout
        eyebrow="LET’S FIND THE RIGHT NEXT STEP"
        title={<>Here to help, wherever <em>life happens.</em></>}
        description="Whether you are looking for care at home, reliable services for an organization or a community partnership, our team is ready to listen."
        action="Talk to our team"
      />
    </main>
  )
}

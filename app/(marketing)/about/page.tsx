import type { Metadata } from 'next'
import { commitments, serviceSteps } from '@/components/marketing/content'
import { ContactCallout, Eyebrow, InfoCard, PageHero, SectionHeading } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'About Lifeline',
  description: 'Learn about Lifeline’s person-centred approach to care, home services and community support.',
}

export default function AboutPage() {
  return (
    <main className="marketing-main">
      <PageHero
        eyebrow="ABOUT LIFELINE"
        title={<>Care that sees the <em>whole person.</em></>}
        description="We bring care, home services and community support together with one purpose: helping people feel respected, supported and connected in everyday life."
        image={{ src: '/lifeline-community.png', alt: 'People coming together at a community gathering' }}
      />

      <section className="about-intro">
        <div className="site-container about-intro__grid">
          <div>
            <Eyebrow>OUR CO-OPERATIVE</Eyebrow>
            <h2>Good support starts by <em>understanding what matters.</em></h2>
          </div>
          <div className="about-intro__copy">
            <p>People bring different routines, goals and support networks. Our work starts with listening to each person and partner, then coordinating practical help that fits the situation.</p>
            <p>From personal care and housekeeping to contracted services and community programs, Lifeline connects people with dependable support while keeping dignity and choice at the centre.</p>
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

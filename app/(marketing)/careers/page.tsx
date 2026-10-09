import type { Metadata } from 'next'
import { careerAreas, editorialPhotos } from '@/components/marketing/content'
import { ContactCallout, Eyebrow, InfoCard, PageHero, SectionHeading, TextLink } from '@/components/marketing/marketing-primitives'

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

      <section className="marketing-section career-guide" aria-labelledby="career-guide-title">
        <div className="site-container career-guide__grid">
          <div><Eyebrow>STARTING A CAREER CONVERSATION</Eyebrow><h2 id="career-guide-title">Bring your experience, <em>curiosity and care.</em></h2></div>
          <div className="career-guide__copy"><p>Lifeline work can include direct support, housekeeping, community services, coordination and partnership work. The right fit depends on the role, the setting and the experience or training it requires.</p><p>When you reach out, share the area that interests you and the kind of work you are looking for. We can explain the next step without asking you to know the perfect job title first.</p></div>
        </div>
      </section>

      <section className="marketing-section career-details" aria-labelledby="career-details-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="A GOOD FIRST MESSAGE"
            titleId="career-details-title"
            title={<>Tell us where you want to <em>make a difference.</em></>}
            copy="A short, honest introduction is enough to begin. The details below help us understand what kind of opportunity you are exploring."
          />
          <div className="career-details__grid">
            <article><h3>Your area of interest</h3><p>Care, home services, housekeeping, community support, coordination or another area that connects with your experience.</p></article>
            <article><h3>Your experience</h3><p>Share relevant work, training, lived experience or strengths you would bring to a role.</p></article>
            <article><h3>Your practical needs</h3><p>Include your city or region, preferred schedule and any questions about the next step.</p></article>
          </div>
        </div>
      </section>

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

      <section className="marketing-section career-process" aria-labelledby="career-process-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="THE CONVERSATION"
            titleId="career-process-title"
            title={<>A simple path from interest to <em>next steps.</em></>}
            copy="We keep the first conversation straightforward. You do not need to have every answer before reaching out."
          />
          <ol className="career-process__steps">
            <li><span>01</span><div><h3>Introduce yourself</h3><p>Tell us what kind of work interests you, where you are located and how you heard about Lifeline.</p></div></li>
            <li><span>02</span><div><h3>Share your strengths</h3><p>Include relevant experience, training, certifications or lived experience that may connect with the work.</p></div></li>
            <li><span>03</span><div><h3>Explore the fit</h3><p>We can discuss the setting, responsibilities, availability and any role-specific requirements that apply.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="marketing-section career-faq" aria-labelledby="career-faq-title">
        <div className="site-container career-faq__layout">
          <SectionHeading eyebrow="COMMON QUESTIONS" titleId="career-faq-title" title={<>Before you <em>reach out.</em></>} copy="A few practical answers to help you decide what to include in your first message." />
          <div className="career-faq__list">
            <details><summary>Do I need a specific job title?</summary><p>No. Describe the kind of work or setting that interests you and we can help identify the closest opportunity.</p></details>
            <details><summary>What should I include in my email?</summary><p>Share your area of interest, location, relevant experience or training, availability and any question you want answered.</p></details>
            <details><summary>Are requirements the same for every role?</summary><p>No. Requirements can vary by responsibility and setting. We can explain the qualifications, screening or training connected to a specific opportunity.</p></details>
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

      <section className="marketing-section detail-panel-section" aria-labelledby="career-experience-title">
        <div className="site-container">
          <SectionHeading eyebrow="WHAT TO EXPECT" titleId="career-experience-title" title={<>Find work that fits your <em>strengths.</em></>} copy="A career conversation can be useful even when you are still exploring. Share what you know, what you want to learn and the setting where you do your best work." />
          <div className="detail-panel-grid">
            <article><h3>People skills matter</h3><p>Listening, patience, reliability and respect are valuable in every care and community support setting.</p></article>
            <article><h3>Every role has standards</h3><p>Specific positions may require training, screening, certifications or other qualifications. We can clarify what applies to the opportunity.</p></article>
            <article><h3>Growth starts with clarity</h3><p>Ask about the work, schedule, setting and expectations so you can decide whether a role is a good fit.</p></article>
          </div>
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

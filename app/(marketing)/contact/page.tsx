import type { Metadata } from 'next'
import { ArrowRight, BriefcaseBusiness, HandHeart, Mail, Users } from 'lucide-react'
import { Eyebrow } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Contact Lifeline',
  description: 'Contact Lifeline about care, home services, careers or an organization partnership.',
}

const contactOptions = [
  {
    number: '01',
    title: 'Care and home support',
    description: 'Looking for care, companionship, respite, housekeeping or practical help at home?',
    subject: 'Care and home support',
    icon: HandHeart,
  },
  {
    number: '02',
    title: 'Organization partnerships',
    description: 'Need staffing, commercial cleaning, facility support or a community program partner?',
    subject: 'Organization partnership',
    icon: BriefcaseBusiness,
  },
  {
    number: '03',
    title: 'Careers and opportunities',
    description: 'Interested in meaningful work across care, home services or community support?',
    subject: 'Career opportunities',
    icon: Users,
  },
]

export default function ContactPage() {
  return (
    <main className="marketing-main">
      <section className="contact-hero">
        <div className="site-container contact-hero__inner">
          <Eyebrow>START WITH A CONVERSATION</Eyebrow>
          <h1>Tell us what support <em>looks like for you.</em></h1>
          <p>Share what you are looking for and we will help you find the right next step, whether you are an individual, family or organization.</p>
          <a className="contact-hero__email" href="mailto:hello@lifelinecooperative.org">
            <span><Mail size={18} aria-hidden="true" /> hello@lifelinecooperative.org</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="marketing-section contact-options-section" aria-labelledby="contact-options-title">
        <div className="site-container">
          <div className="contact-options-heading">
            <div><Eyebrow>HOW CAN WE HELP?</Eyebrow><h2 id="contact-options-title">Choose the conversation <em>you need.</em></h2></div>
            <p>Each note goes directly to the Lifeline team. Include a few details so we can understand what you are looking for.</p>
          </div>
          <div className="contact-option-grid">
            {contactOptions.map(({ number, title, description, subject, icon: Icon }) => (
              <article className="contact-option-card" key={number}>
                <div className="contact-option-card__top"><span><Icon size={21} aria-hidden="true" /></span><small>{number}</small></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={`mailto:hello@lifelinecooperative.org?subject=${encodeURIComponent(subject)}`}>
                  Email about this <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="contact-bottom-note">
            <span><Mail size={17} aria-hidden="true" /> Prefer to write your own message?</span>
            <a href="mailto:hello@lifelinecooperative.org">Email hello@lifelinecooperative.org <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>
  )
}

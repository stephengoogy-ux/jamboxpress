import type { Metadata } from 'next'
import { ArrowRight, BriefcaseBusiness, HandHeart, LockKeyhole, Mail, Users } from 'lucide-react'
import { serviceItems } from '@/components/marketing/content'
import { Eyebrow } from '@/components/marketing/marketing-primitives'

export const metadata: Metadata = {
  title: 'Contact Lifeline',
  description: 'Contact Lifeline about care, home services, careers or an organization partnership.',
}

const emailAddress = 'hello@lifelinecooperative.org'

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

function createEmailDraft(subject: string, service?: string) {
  const body = [
    'Hello Lifeline team,',
    '',
    service ? `I am interested in ${service}.` : 'I am getting in touch about:',
    '',
    'Location (city or region):',
    'Preferred timing:',
    'A little more about what I need:',
    '',
    'Thank you,',
  ].join('\n')

  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const requestedService = params.service
  const selectedServiceTitle = Array.isArray(requestedService) ? requestedService[0] : requestedService
  const selectedService = serviceItems.find((service) => service.title === selectedServiceTitle)
  const primarySubject = selectedService ? `Service enquiry: ${selectedService.title}` : 'Lifeline enquiry'

  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="site-container contact-hero__inner">
          <Eyebrow>START WITH A CONVERSATION</Eyebrow>
          <h1 id="contact-title">Let&apos;s make the next step <em>clear.</em></h1>
          <p className="contact-hero__description">Choose a topic and we&apos;ll open an email draft for you to review. Nothing is sent until you choose Send.</p>
          <a className="contact-hero__email" href={createEmailDraft(primarySubject, selectedService?.title)}>
            <span><Mail size={18} aria-hidden="true" />{selectedService ? `Ask about ${selectedService.title}` : 'Email our team'}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <p className="contact-hero__email-note">Draft addressed to <a href={`mailto:${emailAddress}`}>{emailAddress}</a>. Your email app sends only after you approve it.</p>
          {selectedService ? <p className="contact-hero__selected">You were looking at <strong>{selectedService.title}</strong>.</p> : null}
        </div>
      </section>

      <section className="marketing-section contact-options-section" aria-labelledby="contact-options-title">
        <div className="site-container">
          <div className="contact-options-heading">
            <div><Eyebrow>HOW CAN WE HELP?</Eyebrow><h2 id="contact-options-title">Choose the conversation <em>you need.</em></h2></div>
            <p>Each option opens a prepared email draft with a clear subject. Review it, add whatever details you are comfortable sharing, and send it when you&apos;re ready.</p>
          </div>
          <div className="contact-option-grid">
            {contactOptions.map(({ number, title, description, subject, icon: Icon }) => (
              <article className="contact-option-card" key={number}>
                <div className="contact-option-card__top"><span><Icon size={21} aria-hidden="true" /></span><small>{number}</small></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={createEmailDraft(subject)}>
                  Open email draft <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="contact-bottom-note">
            <span><Mail size={17} aria-hidden="true" /> Prefer to write your own message?</span>
            <a href={`mailto:${emailAddress}`}>Email {emailAddress} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="contact-guidance" aria-labelledby="contact-guidance-title">
        <div className="site-container contact-guidance__grid">
          <div className="contact-guidance__intro">
            <Eyebrow>BEFORE YOU SEND</Eyebrow>
            <h2 id="contact-guidance-title">A little context goes <em>a long way.</em></h2>
            <p>A short note is enough to help us understand where to start. Share only what you feel comfortable including in an email.</p>
          </div>
          <div className="contact-guidance__details">
            <ol className="contact-guidance__list">
              <li><span>01</span><p>The service or kind of support you have in mind</p></li>
              <li><span>02</span><p>Your general location, such as a city or region</p></li>
              <li><span>03</span><p>Preferred timing and any questions you would like to ask</p></li>
            </ol>
            <p className="contact-guidance__privacy"><LockKeyhole size={18} aria-hidden="true" />Email is not a secure channel. Please avoid sending sensitive health, financial or personal information.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

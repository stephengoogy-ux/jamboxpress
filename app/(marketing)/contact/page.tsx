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
    audience: 'family',
    number: '01',
    title: 'Care and home support',
    description: 'Looking for care, companionship, respite, housekeeping or practical help at home?',
    subject: 'Care and home support enquiry',
    heroAction: 'Start a care enquiry',
    cardAction: 'Open care enquiry draft',
    opening: 'I am looking for care or practical support at home.',
    prompts: ['City or region:', 'Preferred timing:', 'What would be helpful:', 'Questions I would like to ask:'],
    icon: HandHeart,
  },
  {
    audience: 'organization',
    number: '02',
    title: 'Organization partnerships',
    description: 'Need staffing, commercial cleaning, facility support or a community program partner?',
    subject: 'Organization partnership enquiry',
    heroAction: 'Start a partnership enquiry',
    cardAction: 'Open partnership draft',
    opening: 'I am exploring services or a partnership for an organization.',
    prompts: ['Organization and service setting:', 'City or region:', 'The work or outcome I need support with:', 'Timing or coordination details:'],
    icon: BriefcaseBusiness,
  },
  {
    audience: 'careers',
    number: '03',
    title: 'Careers and opportunities',
    description: 'Interested in meaningful work across care, home services or community support?',
    subject: 'Career opportunities enquiry',
    heroAction: 'Email about careers',
    cardAction: 'Open careers draft',
    opening: 'I am interested in career opportunities with Lifeline.',
    prompts: ['Area of work I am interested in:', 'Relevant experience or training:', 'City or region:', 'Schedule considerations or questions:'],
    icon: Users,
  },
]

const generalPrompts = ['City or region:', 'Preferred timing:', 'What would be helpful:', 'Questions I would like to ask:']

function createEmailDraft(subject: string, opening = 'I am getting in touch about:', prompts = generalPrompts) {
  const body = [
    'Hello Lifeline team,',
    '',
    opening,
    '',
    ...prompts,
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
  const requestedAudience = params.audience
  const selectedAudienceKey = Array.isArray(requestedAudience) ? requestedAudience[0] : requestedAudience
  const selectedAudience = contactOptions.find((option) => option.audience === selectedAudienceKey)
  const primarySubject = selectedService
    ? `Service enquiry: ${selectedService.title}`
    : selectedAudience?.subject ?? 'Lifeline enquiry'
  const primaryAction = selectedService
    ? `Ask about ${selectedService.title}`
    : selectedAudience?.heroAction ?? 'Email our team'
  const primaryOpening = selectedService
    ? `I am interested in ${selectedService.title}.`
    : selectedAudience?.opening
  const primaryPrompts = selectedService
    ? generalPrompts
    : selectedAudience?.prompts

  return (
    <main id="main-content" className="marketing-main" tabIndex={-1}>
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="site-container contact-hero__inner">
          <Eyebrow>START WITH A CONVERSATION</Eyebrow>
          <h1 id="contact-title">Let&apos;s make the next step <em>clear.</em></h1>
          <p className="contact-hero__description">
            {selectedAudience ? (
              <>You chose the <strong>{selectedAudience.title.toLowerCase()}</strong> path. This opens a prepared email to Lifeline with a matching subject line.</>
            ) : selectedService ? (
              <>You were looking at <strong>{selectedService.title}</strong>. This opens a prepared email draft with the service name in its subject.</>
            ) : (
              <>Choose a topic and we&apos;ll open an email draft for you to review. Nothing is sent until you choose Send.</>
            )}
          </p>
          <a className="contact-hero__email" href={createEmailDraft(primarySubject, primaryOpening, primaryPrompts)}>
            <span><Mail size={18} aria-hidden="true" />{primaryAction}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <p className="contact-hero__email-note">Draft addressed to <a href={`mailto:${emailAddress}`}>{emailAddress}</a>. Your email app sends only after you approve it.</p>
          {selectedAudience ? <p className="contact-hero__selected">Selected topic: <strong>{selectedAudience.title}</strong></p> : null}
        </div>
      </section>

      <section className="marketing-section contact-options-section" aria-labelledby="contact-options-title">
        <div className="site-container">
          <div className="contact-options-heading">
            <div><Eyebrow>HOW CAN WE HELP?</Eyebrow><h2 id="contact-options-title">Choose the conversation <em>you need.</em></h2></div>
            <p>Each option prepares an email to {emailAddress} with a clear subject and useful prompts. Review it, add only what you are comfortable sharing, then send it when you&apos;re ready.</p>
          </div>
          <div className="contact-option-grid">
            {contactOptions.map(({ audience, number, title, description, subject, opening, prompts, cardAction, icon: Icon }) => {
              const isSelected = selectedAudience?.audience === audience

              return (
                <article className="contact-option-card" data-selected={isSelected || undefined} key={number}>
                  <div className="contact-option-card__top"><span><Icon size={21} aria-hidden="true" /></span><small>{number}</small></div>
                  {isSelected ? <span className="contact-option-card__selected">Selected from previous page</span> : null}
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={createEmailDraft(subject, opening, prompts)}>
                    {cardAction} <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </article>
              )
            })}
          </div>
          <div className="contact-bottom-note">
            <span><Mail size={17} aria-hidden="true" /> Prefer to write your own message?</span>
            <a href={`mailto:${emailAddress}`}>Email {emailAddress} <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="marketing-section contact-response" aria-labelledby="contact-response-title">
        <div className="site-container contact-response__grid">
          <div>
            <Eyebrow>WHAT HAPPENS NEXT</Eyebrow>
            <h2 id="contact-response-title">Your message gives us a <em>place to begin.</em></h2>
          </div>
          <div className="contact-response__copy">
            <p>Once you send the email, our team can review the context you chose to share and respond with the most useful next step. That may be a follow-up question, a conversation about fit, or information about the service area you selected.</p>
            <p>Because email is the current contact route, response timing can vary. If your situation is urgent or there is an immediate safety concern, use local emergency or crisis services instead.</p>
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

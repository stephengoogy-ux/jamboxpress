import type { Metadata } from 'next'
import { commitments, serviceItems } from '@/components/marketing/content'
import { ContactCallout, PageHero, SectionHeading, ServiceCard } from '@/components/marketing/marketing-primitives'

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
    <main className="marketing-main">
      <PageHero
        eyebrow="OUR SERVICES"
        title={<>One team for care, home <em>&amp; community.</em></>}
        description="Explore practical, respectful support for people and families, plus dependable services for workplaces, facilities and community organizations."
        image={{ src: '/lifeline-cleaning.png', alt: 'A team member providing professional cleaning in a bright interior' }}
        secondaryHref="#service-list"
        secondaryLabel="Browse by service"
      />

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
            copy="Start with the group that sounds closest. Each service opens a prepared email draft, so you can ask about the option that matters to you."
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

      <ContactCallout
        eyebrow="NOT SURE WHERE TO START?"
        title={<>Let&apos;s figure out the <em>right fit together.</em></>}
        description="Tell us what you are looking for. Our team can help you understand the service options and the next step."
        action="Ask our team"
      />
    </main>
  )
}

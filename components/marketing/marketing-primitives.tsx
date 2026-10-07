import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import type { ServiceItem } from './content'

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`marketing-eyebrow ${className}`}>{children}</p>
}

export function PrimaryLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link className={`site-button ${className}`} href={href}>
      {children}<ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="marketing-text-link" href={href}>
      {children}<ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  copy,
  actionHref,
  actionLabel,
}: {
  eyebrow: string
  title: ReactNode
  titleId?: string
  copy: string
  actionHref?: string
  actionLabel?: string
}) {
  return (
    <div className="marketing-section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId}>{title}</h2>
      </div>
      <div className="marketing-section-heading__side">
        <p>{copy}</p>
        {actionHref && actionLabel ? <TextLink href={actionHref}>{actionLabel}</TextLink> : null}
      </div>
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  image?: { src: string; alt: string }
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className={`page-hero${image ? ' page-hero--with-image' : ' page-hero--text-only'}`}>
      <div className="site-container page-hero__grid">
        <div className="page-hero__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="page-hero__actions">
            <PrimaryLink href="/contact">Request support</PrimaryLink>
            {secondaryHref && secondaryLabel ? <TextLink href={secondaryHref}>{secondaryLabel}</TextLink> : null}
          </div>
        </div>
        {image ? (
          <div className="page-hero__visual">
            <div className="page-hero__image">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 820px) 100vw, 48vw" />
            </div>
            <div className="page-hero__image-caption"><span>Care with respect</span><span>People first, always</span></div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon

  return (
    <Link className="marketing-service-card" href={`/contact?service=${encodeURIComponent(service.title)}`}>
      <div className="marketing-service-card__top">
        <span className="marketing-service-card__icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
        <span className="marketing-service-card__number">{service.number}</span>
      </div>
      <span className="marketing-service-card__category">{service.category}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="marketing-service-card__link">Ask about this service <ArrowRight size={15} aria-hidden="true" /></span>
    </Link>
  )
}

export function InfoCard({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <article className="marketing-info-card">
      <div className="marketing-info-card__top">
        <span className="marketing-info-card__icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
        <span className="marketing-info-card__number">{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export function ContactCallout({
  eyebrow = 'START WITH A CONVERSATION',
  title,
  description,
  action = 'Talk to our team',
}: {
  eyebrow?: string
  title: ReactNode
  description: string
  action?: string
}) {
  return (
    <section className="contact-callout" aria-labelledby="contact-callout-title">
      <div className="site-container contact-callout__inner">
        <div>
          <Eyebrow className="marketing-eyebrow--light">{eyebrow}</Eyebrow>
          <h2 id="contact-callout-title">{title}</h2>
          <p>{description}</p>
        </div>
        <PrimaryLink href="/contact" className="site-button--light">{action}</PrimaryLink>
      </div>
    </section>
  )
}

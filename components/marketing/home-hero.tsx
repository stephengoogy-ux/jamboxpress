'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Pause, Play } from 'lucide-react'
import { useEffect, useState, type KeyboardEvent } from 'react'

const slideDuration = 7500

const slides = [
  {
    number: '01',
    category: 'HOME SUPPORT',
    eyebrow: 'SUPPORT FOR EVERYDAY LIFE',
    title: 'Good support starts',
    emphasis: 'with a person.',
    description: 'Thoughtful care and practical help, shaped around the people and routines that matter.',
    action: 'Explore home support',
    href: '/services#care-support',
    image: '/lifeline-care.png',
  },
  {
    number: '02',
    category: 'HOUSEKEEPING',
    eyebrow: 'CARE FOR THE PLACES WE SHARE',
    title: 'A little help can',
    emphasis: 'go a long way.',
    description: 'Reliable housekeeping and everyday home services to make daily life feel more manageable.',
    action: 'Explore home services',
    href: '/services#home-support',
    image: '/lifeline-cleaning.png',
  },
  {
    number: '03',
    category: 'COMMUNITY SERVICES',
    eyebrow: 'CONNECTED, CARING COMMUNITIES',
    title: 'Good things happen',
    emphasis: 'when we connect.',
    description: 'Practical community programs and support that help people feel connected and included.',
    action: 'Explore community services',
    href: '/services#organization-support',
    image: '/lifeline-community.png',
  },
  {
    number: '04',
    category: 'WORKFORCE SOLUTIONS',
    eyebrow: 'FOR ORGANIZATIONS',
    title: 'The right people',
    emphasis: 'make it possible.',
    description: 'Flexible staffing and contract support for facilities, organizations and care environments.',
    action: 'Explore workforce solutions',
    href: '/organizations',
    image: '/lifeline-team.png',
  },
  {
    number: '05',
    category: 'PARTNERSHIPS',
    eyebrow: 'ONE ORGANIZATION. MANY WAYS TO HELP.',
    title: 'Practical support,',
    emphasis: 'built together.',
    description: 'Dependable services for businesses, facilities, non-profits and community organizations across Canada.',
    action: 'Explore partnerships',
    href: '/organizations',
    image: '/lifeline-editorial-partners.png',
  },
] as const

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(3)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPointerInside, setIsPointerInside] = useState(false)
  const [hasFocusInside, setHasFocusInside] = useState(false)
  const activeSlide = slides[activeIndex]
  const shouldAutoAdvance = isPlaying && !isPointerInside && !hasFocusInside

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const stopForReducedMotion = () => {
      if (motionPreference.matches) setIsPlaying(false)
    }

    stopForReducedMotion()
    motionPreference.addEventListener('change', stopForReducedMotion)

    return () => motionPreference.removeEventListener('change', stopForReducedMotion)
  }, [])

  useEffect(() => {
    if (!shouldAutoAdvance) return

    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveIndex((current) => (current + 1) % slides.length)
      }
    }, slideDuration)

    return () => window.clearInterval(interval)
  }, [activeIndex, shouldAutoAdvance])

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % slides.length)
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
    }
  }

  return (
    <section
      className={`home-hero${shouldAutoAdvance ? '' : ' home-hero--paused'}`}
      aria-label="Featured Lifeline services"
      aria-roledescription="carousel"
      aria-labelledby="home-hero-title"
      onMouseEnter={() => setIsPointerInside(true)}
      onMouseLeave={() => setIsPointerInside(false)}
      onFocusCapture={() => setHasFocusInside(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocusInside(false)
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="home-slider__background" aria-hidden="true">
        <Image
          key={activeSlide.image}
          className="home-slider__image"
          src={activeSlide.image}
          alt=""
          fill
          loading="eager"
          sizes="100vw"
        />
      </div>

      <div className="site-container home-slider__content">
        <div
          className="home-slider__copy"
          key={activeSlide.number}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${slides.length}: ${activeSlide.category}`}
          aria-live={shouldAutoAdvance ? 'off' : 'polite'}
        >
          <p className="home-slider__eyebrow">{activeSlide.eyebrow}</p>
          <h1 className="home-slider__title" id="home-hero-title">
            <span>{activeSlide.title}</span>
            <em>{activeSlide.emphasis}</em>
          </h1>
          <p className="home-slider__lead">{activeSlide.description}</p>
          <div className="home-slider__actions">
            <Link className="home-slider__primary" href={activeSlide.href}>
              {activeSlide.action}<ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="home-slider__secondary" href="/services">
              View all services<ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="home-slider__controls">
          <div className="home-slider__pagination" role="group" aria-label="Choose a featured service">
            {slides.map((slide, index) => (
              <button
                className="home-slider__trigger"
                type="button"
                aria-label={`Show slide ${slide.number}: ${slide.category}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                key={slide.number}
                onClick={() => setActiveIndex(index)}
              >
                <span className="home-slider__number">{slide.number}</span>
                <span className="home-slider__track" aria-hidden="true">
                  <span className="home-slider__fill" key={activeIndex === index ? slide.number : 'idle'} />
                </span>
              </button>
            ))}
          </div>

          <p className="home-slider__active-label" aria-hidden="true">{activeSlide.category}</p>

          <button
            className="home-slider__toggle"
            type="button"
            aria-label="Automatic slide changes"
            aria-pressed={isPlaying}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
          </button>

          <Link className="home-slider__explore" href="#support-paths">
            Explore Lifeline<ArrowDown size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { HomePage } from '@/components/marketing/home-page'

export const metadata: Metadata = {
  title: 'Care, home support and community services',
  description: 'Thoughtful care at home, dependable housekeeping and community services, brought together around the people who matter.',
}

export default function Page() {
  return <HomePage />
}

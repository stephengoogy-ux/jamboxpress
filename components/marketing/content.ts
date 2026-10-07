import {
  Building2,
  BriefcaseBusiness,
  ClipboardList,
  HeartHandshake,
  HandHeart,
  Home,
  MapPin,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type ServiceItem = {
  number: string
  title: string
  description: string
  category: string
  icon: LucideIcon
}

export const serviceItems: ServiceItem[] = [
  {
    number: '01',
    title: 'Healthcare services',
    description: 'Practical, respectful care and everyday support that promotes dignity, safety and independence.',
    category: 'Care and support',
    icon: HeartHandshake,
  },
  {
    number: '02',
    title: 'Residential housekeeping',
    description: 'Reliable cleaning, laundry and home assistance that helps people feel comfortable where they live.',
    category: 'Home services',
    icon: Home,
  },
  {
    number: '03',
    title: 'Commercial housekeeping',
    description: 'Professional cleaning solutions for workplaces, facilities and organizations across Canada.',
    category: 'Workplace services',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Community support',
    description: 'Companionship, respite and practical programs that connect people to the support they need.',
    category: 'Community services',
    icon: Users,
  },
  {
    number: '05',
    title: 'Partnerships and contracts',
    description: 'Flexible staffing and contracted services for government, non-profits, facilities and businesses.',
    category: 'Organization support',
    icon: BriefcaseBusiness,
  },
  {
    number: '06',
    title: 'Personal care and respite',
    description: 'Person-centred support for seniors, people with disabilities and families who need a helping hand.',
    category: 'Care and support',
    icon: HandHeart,
  },
  {
    number: '07',
    title: 'HCA and caregiver services',
    description: 'Qualified home support workers and caregivers providing dependable, respectful assistance in daily life.',
    category: 'Care and support',
    icon: Stethoscope,
  },
  {
    number: '08',
    title: 'Companion care',
    description: 'Warm companionship, social connection and practical help that supports confidence at home and in the community.',
    category: 'Care and support',
    icon: HeartHandshake,
  },
  {
    number: '09',
    title: 'Dementia support',
    description: 'Calm, consistent support for people living with dementia and the families who care for them.',
    category: 'Care and support',
    icon: Users,
  },
  {
    number: '10',
    title: 'Post-hospital support',
    description: 'A thoughtful transition home with short-term help, routines and practical recovery support.',
    category: 'Care and support',
    icon: ClipboardList,
  },
  {
    number: '11',
    title: 'Meals, transportation and errands',
    description: 'Practical assistance with meals, appointments, transportation and everyday tasks.',
    category: 'Home services',
    icon: MapPin,
  },
  {
    number: '12',
    title: 'Facility and workforce support',
    description: 'Dependable people and coordinated services for care environments and community organizations.',
    category: 'Organization support',
    icon: Building2,
  },
]

export const featuredServices = serviceItems.slice(0, 4)

export const commitments = [
  {
    number: '01',
    title: 'People first',
    description: 'Services are shaped around people, their routines and what matters to them.',
    icon: HeartHandshake,
  },
  {
    number: '02',
    title: 'Flexible support',
    description: 'Support can adapt as needs, families and circumstances change.',
    icon: HandHeart,
  },
  {
    number: '03',
    title: 'Professional approach',
    description: 'Clear communication and considered coordination help make service dependable.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'Community focus',
    description: 'Practical services help individuals, families and communities thrive.',
    icon: Users,
  },
]

export const serviceSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Share a little about the support or service you are looking for.',
  },
  {
    number: '02',
    title: 'We understand your needs',
    description: 'Our team reviews the request and learns what matters most.',
  },
  {
    number: '03',
    title: 'We coordinate support',
    description: 'We work out the right people, schedule and resources for the request.',
  },
  {
    number: '04',
    title: 'Support begins',
    description: 'Service starts with clear communication and room to adjust as needs evolve.',
  },
]

export const organizationTypes = [
  {
    number: '01',
    title: 'Facilities',
    description: 'Staffing and support for care and residential environments.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Businesses',
    description: 'Professional commercial and workplace services.',
    icon: BriefcaseBusiness,
  },
  {
    number: '03',
    title: 'Government',
    description: 'Community programs and contracted support.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'Non-profits and community',
    description: 'Practical services that strengthen community initiatives.',
    icon: Users,
  },
]

export const careerAreas = [
  {
    number: '01',
    title: 'Care and home support',
    description: 'Help people with personal care, daily routines and greater confidence at home.',
    icon: HandHeart,
  },
  {
    number: '02',
    title: 'Housekeeping and cleaning',
    description: 'Make living, working and shared spaces feel cared for and ready for everyday life.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Community services',
    description: 'Connect people with companionship, practical programs and local support.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Coordination and partnerships',
    description: 'Help organize thoughtful service delivery for people and partner organizations.',
    icon: BriefcaseBusiness,
  },
]

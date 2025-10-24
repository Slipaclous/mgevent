export interface Project {
  id: number
  title: string
  category: 'mariage' | 'soiree' | 'anniversaire'
  type: string
  date: string
  location: string
  image: string
  description: string
  features: string[]
  rating: number
  color: string
}

export interface Service {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  features: string[]
  price: string
  color: string
  bgColor: string
}

export interface PricingPlan {
  name: string
  icon: React.ReactNode
  price: string
  originalPrice?: string
  description: string
  color: string
  bgColor: string
  popular: boolean
  features: Array<{
    name: string
    included: boolean
  }>
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  budget: string
  message: string
  newsletter: boolean
}

export interface Testimonial {
  name: string
  event: string
  text: string
  rating: number
}

export interface Stat {
  number: string
  label: string
}

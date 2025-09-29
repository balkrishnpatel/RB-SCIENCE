import Hero from '@/components/Hero'
import ConferenceBanner from '@/components/ConferenceBanner'
import Certifications from '@/components/Certifications'
import Services from '@/components/Services'
import Events from '@/components/Events'
import Career from '@/components/Career'
import Values from '@/components/Values'
import TrainingPrograms from '@/components/TrainingPrograms'
import Statistics from '@/components/Statistics'
import ContactForm from '@/components/ContactForm'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ConferenceBanner />
      <Certifications />
      <Services />
      <Events />
      <Career />
      <Values />
      <TrainingPrograms />
      <Statistics />
      <ContactForm />
      <Blog />
      <Testimonials />
    </main>
  )
}
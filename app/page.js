import Hero from '@/components/Hero'
import HomeConferenceBanner from '@/components/HomeConferenceBanner'
import HomeCertifications from '@/components/HomeCertifications'
import HomeServices from '@/components/HomeServices'
import HomeEvents from '@/components/HomeEvents'
import HomeCareer from '@/components/HomeCareer'
import HomeValues from '@/components/HomeValues'
import HomeTrainingPrograms from '@/components/HomeTrainingPrograms'
import HomeStatistics from '@/components/HomeStatistics'
import HomeContactForm from '@/components/HomeContactForm'
import HomeBlog from '@/components/HomeBlog'
import HomeTestimonials from '@/components/HomeTestimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HomeConferenceBanner />
      <HomeCertifications />
      <HomeServices />
      <HomeEvents />
      <HomeCareer />
      <HomeValues />
      <HomeTrainingPrograms />
      <HomeStatistics />
      <HomeContactForm />
      <HomeBlog />
      <HomeTestimonials />
    </main>
  )
}
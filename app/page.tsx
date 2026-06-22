import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Trust } from '@/components/trust'
import { ProductShowcase } from '@/components/product-showcase'
import { CorporateGifting } from '@/components/corporate-gifting'
import { FestivalCollection } from '@/components/festival-collection'
import { Storytelling } from '@/components/storytelling'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Trust />
      <ProductShowcase />
      <CorporateGifting />
      <FestivalCollection />
      <Storytelling />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}

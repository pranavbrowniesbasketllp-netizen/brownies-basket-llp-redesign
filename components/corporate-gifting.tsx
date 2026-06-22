'use client'

import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const offerings = [
  'Employee appreciation & onboarding gifts',
  'Premium client & partner gifting',
  'Festive corporate hampers at scale',
  'Custom branding & personalised notes',
]

export function CorporateGifting() {
  return (
    <section
      id="corporate"
      className="relative overflow-hidden bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-2xl shadow-[var(--cocoa)]/10">
            <Image
              src="/corporate-gifting.png"
              alt="Premium corporate gifting boxes from Brownies Basket"
              width={720}
              height={820}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-border bg-background px-7 py-5 shadow-xl sm:block">
            <p className="font-heading text-3xl text-foreground">200+</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
              Brands trust us
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-gold">
              Corporate Gifting
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-foreground text-balance md:text-6xl">
              Elevate Every Business Relationship
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              From boardroom celebrations to festive outreach, we craft
              memorable gifting experiences that carry your brand with elegance
              and warmth.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4">
            {offerings.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.08}>
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/25 text-gold">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-base text-foreground/90">{item}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm tracking-wide text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Request a Corporate Catalogue
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

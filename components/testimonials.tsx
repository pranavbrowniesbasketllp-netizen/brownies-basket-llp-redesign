'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    quote:
      'The most elegant gifting experience we’ve found. Our clients genuinely remember the box — and the brownies are unreal.',
    name: 'Aarohi Mehta',
    role: 'Head of Partnerships, Lumen Co.',
    image: '/customer-1.png',
  },
  {
    quote:
      'We sent these to 300 employees for Diwali. Flawless coordination, premium presentation, and not a single complaint — only thank-yous.',
    name: 'Rohan Kapoor',
    role: 'People Operations, Northwind',
    image: '/customer-2.png',
  },
  {
    quote:
      'I order the dessert box for every celebration now. It feels like a luxury brand, but it tastes like home. Absolutely worth it.',
    name: 'Sara Dewan',
    role: 'Loyal Customer',
    image: '/customer-3.png',
  },
]

const easing = [0.22, 1, 0.36, 1] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-luxe text-gold">
            Loved & Gifted
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight text-foreground text-balance md:text-6xl">
            Moments worth remembering
          </h2>
        </Reveal>

        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 md:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: easing }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-7 max-w-2xl font-heading text-2xl leading-snug text-foreground text-balance md:text-3xl">
                “{active.quote}”
              </blockquote>
              <div className="mt-9 flex items-center gap-4">
                <Image
                  src={active.image}
                  alt={active.name}
                  width={56}
                  height={56}
                  className="size-14 rounded-full border border-border object-cover"
                />
                <div className="text-left">
                  <p className="font-heading text-lg text-foreground">
                    {active.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={
                    'h-2 rounded-full transition-all duration-300 ' +
                    (i === index
                      ? 'w-7 bg-[var(--gold-deep)]'
                      : 'w-2 bg-border')
                  }
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

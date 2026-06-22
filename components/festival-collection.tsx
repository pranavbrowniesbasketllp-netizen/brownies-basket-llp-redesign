'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const occasions = [
  { name: 'Diwali', note: 'Festive luxe hampers' },
  { name: 'Christmas', note: 'Seasonal indulgence' },
  { name: 'New Year', note: 'Celebration boxes' },
  { name: 'Weddings', note: 'Elegant favours' },
  { name: 'Birthdays', note: 'Personalised treats' },
]

const easing = [0.22, 1, 0.36, 1] as const

export function FestivalCollection() {
  return (
    <section id="festive" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-luxe text-gold">
            Festive Collection
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight text-foreground text-balance md:text-6xl">
            Gifting for every season of joy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            Thoughtfully composed collections that turn festivals and milestones
            into lasting memories.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: easing }}
            className="relative overflow-hidden rounded-[2.5rem] border border-border lg:col-span-3 lg:row-span-2"
          >
            <Image
              src="/festival-collection.png"
              alt="Diwali festive luxury brownie gift box"
              width={900}
              height={1000}
              className="h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--cocoa)]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-[11px] uppercase tracking-luxe text-background/80">
                Now Featured
              </p>
              <h3 className="mt-2 font-heading text-3xl text-background md:text-4xl">
                The Diwali Edit
              </h3>
              <a
                href="#collection"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm tracking-wide text-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore the Edit
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {occasions.slice(0, 4).map((o, i) => (
              <motion.a
                href="#collection"
                key={o.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: easing, delay: i * 0.08 }}
                className="group flex items-center justify-between rounded-3xl border border-border bg-card px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-deep)]"
              >
                <span>
                  <span className="font-heading text-xl text-foreground">
                    {o.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {o.note}
                  </span>
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <ArrowRight className="size-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

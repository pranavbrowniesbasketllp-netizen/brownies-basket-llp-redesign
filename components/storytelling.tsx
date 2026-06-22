'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './reveal'

const chapters = [
  {
    no: '01',
    title: 'The Finest Ingredients',
    body: 'Single-origin couverture chocolate, real butter, and slow-toasted nuts. Nothing artificial — only what belongs.',
  },
  {
    no: '02',
    title: 'Baked Fresh, Daily',
    body: 'Every batch is baked the morning it ships, so each bite arrives at its richest, most tender best.',
  },
  {
    no: '03',
    title: 'Finished By Hand',
    body: 'Hand-cut, hand-glazed, and packed with care — a craftsman’s touch on every single piece.',
  },
]

export function Storytelling() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80])

  return (
    <section id="craft" ref={ref} className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-luxe text-gold">
            Our Craft
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.05] text-foreground text-balance md:text-7xl">
            Every Brownie Has A Story
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-5">
            <motion.div
              style={{ y: y1 }}
              className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-[var(--cocoa)]/10"
            >
              <Image
                src="/story-ingredients.png"
                alt="Premium baking ingredients arranged elegantly"
                width={500}
                height={640}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="mt-10 overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-[var(--cocoa)]/10"
            >
              <Image
                src="/story-craft.png"
                alt="Pastry chef pouring chocolate over brownies"
                width={500}
                height={640}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:pl-6">
            {chapters.map((c, i) => (
              <Reveal key={c.no} delay={i * 0.1}>
                <div className="flex gap-6 border-b border-border py-8 last:border-b-0">
                  <span className="font-heading text-2xl text-gold">
                    {c.no}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const easing = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yPackage = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yPlate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const headingY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* soft decorative wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[12%] size-[42rem] rounded-full bg-[var(--gold)]/20 blur-3xl" />
        <div className="absolute left-[-8%] bottom-[6%] size-[34rem] rounded-full bg-[var(--oatmeal)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <motion.div style={{ y: headingY, opacity }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] uppercase tracking-luxe text-muted-foreground backdrop-blur-sm"
          >
            Handcrafted in India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.1 }}
            className="mt-6 font-heading text-5xl leading-[0.98] tracking-tight text-foreground text-balance md:text-7xl xl:text-[5.5rem]"
          >
            Crafted For Every Celebration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
          >
            Premium brownies, gifting hampers, dessert boxes, and handcrafted
            treats designed to create memorable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm tracking-wide text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Shop Collection
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#corporate"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold-deep)] px-8 py-4 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-[var(--gold)]/15"
            >
              Corporate Gifting
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easing, delay: 0.6 }}
            className="mt-12 flex items-center gap-8"
          >
            {[
              { value: '50K+', label: 'Moments Gifted' },
              { value: '4.9', label: 'Customer Rating' },
              { value: '200+', label: 'Corporate Clients' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl text-foreground md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating product visuals */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <motion.div
            style={{ y: yPlate }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easing, delay: 0.2 }}
            className="absolute left-0 top-6 w-[62%] overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-[var(--cocoa)]/10"
          >
            <Image
              src="/hero-brownies.png"
              alt="Premium chocolate brownie plated elegantly"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yPackage }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easing, delay: 0.45 }}
            className="absolute bottom-0 right-0 w-[58%]"
          >
            <div className="animate-float-slow overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-[var(--cocoa)]/15">
              <Image
                src="/hero-package.png"
                alt="Luxury Brownies Basket gift box"
                width={640}
                height={640}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--gold-deep)] to-transparent" />
      </motion.div>
    </section>
  )
}

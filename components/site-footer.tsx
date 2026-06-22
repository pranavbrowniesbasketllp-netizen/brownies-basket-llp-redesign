'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Camera, Globe, Share2, ArrowRight, Check } from 'lucide-react'
import { Reveal } from './reveal'

const columns = [
  {
    title: 'Shop',
    links: ['Brownies', 'Gift Hampers', 'Dessert Boxes', 'Festive Edits'],
  },
  {
    title: 'Gifting',
    links: ['Corporate', 'Weddings', 'Birthdays', 'Bulk Orders'],
  },
  {
    title: 'Company',
    links: ['Our Craft', 'Sustainability', 'Contact', 'FAQs'],
  },
]

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="bg-[var(--cocoa)] text-[#EDE6DB]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-2">
          <div>
            <h2 className="max-w-md font-heading text-4xl leading-tight text-[#F8F5F0] text-balance md:text-5xl">
              Join the Brownies Basket circle
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#EDE6DB]/70 text-pretty">
              Be first to receive new collections, seasonal edits, and private
              gifting offers — crafted for those who celebrate beautifully.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {submitted ? (
              <p className="inline-flex items-center gap-2 text-base text-[#F8F5F0]">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--cocoa)]">
                  <Check className="size-4" />
                </span>
                Thank you — welcome to the circle.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-[#F8F5F0] placeholder:text-[#EDE6DB]/50 focus:border-[var(--gold)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm tracking-wide text-[var(--cocoa)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Subscribe
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl text-[#F8F5F0]">
              Brownies Basket
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#EDE6DB]/70">
              A premium brownie, dessert, and gifting house — handcrafting
              memorable moments for celebrations across India.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Camera, label: 'Instagram' },
                { Icon: Globe, label: 'Website' },
                { Icon: Share2, label: 'Share' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-[#EDE6DB] transition-colors hover:bg-[var(--gold)] hover:text-[var(--cocoa)]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] uppercase tracking-luxe text-[var(--gold)]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#EDE6DB]/75 transition-colors hover:text-[#F8F5F0]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#EDE6DB]/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Brownies Basket LLP. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F8F5F0]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#F8F5F0]">
              Terms
            </a>
            <a href="#" className="hover:text-[#F8F5F0]">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

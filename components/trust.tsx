'use client'

import { Leaf, Croissant, ShieldCheck, Truck, Building2 } from 'lucide-react'
import { Reveal } from './reveal'

const pillars = [
  { icon: Leaf, title: 'Premium Ingredients', note: 'Single-origin & pure' },
  { icon: Croissant, title: 'Freshly Baked', note: 'Made the day it ships' },
  { icon: ShieldCheck, title: 'Secure Payments', note: 'Encrypted checkout' },
  { icon: Truck, title: 'Fast Delivery', note: 'Pan-India shipping' },
  { icon: Building2, title: 'Corporate Orders', note: 'Bulk & branded' },
]

export function Trust() {
  return (
    <section className="border-y border-border py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full border border-border bg-card text-gold">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

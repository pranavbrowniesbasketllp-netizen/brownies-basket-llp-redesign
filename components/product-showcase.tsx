'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const products = [
  {
    name: 'Classic Fudge Brownies',
    price: '₹499',
    tag: 'Bestseller',
    image: '/product-classic.png',
    description: 'Dense, fudgy, finished with edible gold.',
  },
  {
    name: 'Signature Gift Hamper',
    price: '₹1,899',
    tag: 'Gifting',
    image: '/product-hamper.png',
    description: 'A curated basket wrapped in satin ribbon.',
  },
  {
    name: 'Indulgence Dessert Box',
    price: '₹1,299',
    tag: 'Sharing',
    image: '/product-dessertbox.png',
    description: 'Sixteen handcrafted treats, beautifully boxed.',
  },
  {
    name: 'Celebration Favours',
    price: '₹899',
    tag: 'Weddings',
    image: '/product-wedding.png',
    description: 'Mini brownies styled for special days.',
  },
]

const easing = [0.22, 1, 0.36, 1] as const

export function ProductShowcase() {
  return (
    <section id="collection" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-gold">
              The Collection
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-tight text-foreground text-balance md:text-6xl">
              Treats worthy of every occasion
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
              Each creation is baked fresh and finished by hand, from everyday
              indulgence to statement gifting.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: easing, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--cocoa)]/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-luxe text-foreground backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-heading text-lg text-foreground">
                    {product.price}
                  </span>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

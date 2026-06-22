'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'Corporate Gifting', href: '#corporate' },
  { label: 'Festive', href: '#festive' },
  { label: 'Our Craft', href: '#craft' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="flex flex-col leading-none"
          aria-label="Brownies Basket home"
        >
          <span className="font-heading text-xl tracking-wide text-foreground md:text-2xl">
            Brownies Basket
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-luxe text-muted-foreground">
            Premium Confectionery
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--gold-deep)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#collection"
            className="hidden items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm tracking-wide text-background transition-transform duration-300 hover:scale-[1.03] md:inline-flex"
          >
            <ShoppingBag className="size-4" />
            Shop
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-foreground/90 hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#collection"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-foreground px-3 py-3 text-center text-base text-background"
              >
                Shop Collection
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

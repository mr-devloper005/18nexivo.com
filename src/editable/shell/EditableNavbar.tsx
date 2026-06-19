'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Menu, Search, X } from 'lucide-react'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-white text-[#06181b] shadow-[0_10px_30px_rgba(0,19,22,.08)] transition-all duration-300">
      <div className="logi-progress" />
      <div className="mx-auto grid max-w-[1296px] lg:grid-cols-[285px_1fr_330px]">
        <Link href="/" className="logi-angle flex min-h-[92px] items-center bg-[var(--slot4-accent)] px-5 text-white sm:px-8">
          <span className="editorial-brand truncate text-2xl font-black sm:text-3xl">{slot4BrandConfig.siteName}</span>
        </Link>
        <div className="hidden border-b border-black/10 px-7 py-3 text-sm font-semibold text-black/55 lg:flex lg:items-center lg:gap-7">
          
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Distribution newsroom and partner desk</span>
        </div>
        <div className="hidden items-center justify-end gap-3 bg-[#001316] px-6 lg:flex lg:row-span-2">
          <Link href="/contact" className="rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase text-white">Get a quote</Link>
          <Link href="/contact" className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-white"><ArrowUpRight className="h-5 w-5" /></Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div className="col-span-2 flex min-h-[56px] items-center justify-between px-4 sm:px-6 lg:px-7">
          <nav className="hidden items-center gap-8 text-sm font-black uppercase lg:flex">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Media Distribution', '/media-distribution'],
              
              ['Create', '/create'],
              ['Contact', '/contact'],

            ].map(([label, href]) => <Link key={href} href={href} className="logi-underline">{label}</Link>)}
            
          </nav>
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <form action="/search" className="ml-auto hidden h-11 w-50 items-center rounded-full border border-black/15 bg-white lg:flex">
            <Search className="ml-3 h-4 w-4 text-black/55" />
            <input name="q" type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-3 text-xs font-bold outline-none placeholder:text-black/40" />
          </form>
          <div className="ml-3 flex items-center gap-2 text-xs font-black uppercase">
            {session ? (
              <>
                <span className="hidden max-w-32 truncate rounded-full bg-[#eef0ef] px-4 py-2 sm:block">{session.name}</span>
                <button type="button" onClick={logout} className="rounded-full bg-[var(--slot4-accent)] px-4 py-2 text-white">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-full border border-black/15 px-4 py-2">Login</Link>
                <Link href="/signup" className="rounded-full bg-[var(--slot4-accent)] px-4 py-2 text-white">Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4">
          <div className="mx-auto grid max-w-[1296px] gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Media Distribution', href: '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-[#eef0ef] px-4 py-3 text-sm font-black uppercase">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

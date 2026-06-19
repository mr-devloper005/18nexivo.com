'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#001316] text-white">
      <div className="mx-auto max-w-[1296px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 grid items-center gap-5 border-b border-white/15 pb-10 lg:grid-cols-[270px_1fr_250px]">
          <Link href="/" className="logi-angle bg-[var(--slot4-accent)] px-7 py-8 text-3xl font-black">{slot4BrandConfig.siteName}</Link>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">Subscribe Newsletter</h2>
          <form action="/signup" className="flex rounded-full bg-white/10 p-1">
            <input name="email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/45" />
            <button className="rounded-full bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase">Subscribe</button>
          </form>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <h3 className="text-2xl font-black">Get In Touch</h3>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              {globalContent.footer?.description || 'Media distribution built for press releases, partner updates, campaign visibility, and timely public discovery.'}
            </p>
            
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Service</h3>
            <div className="mt-4 grid gap-3">
              {['Press release distribution', 'Newswire amplification', 'Partner media routing', 'Campaign content support', 'Archive publishing'].map((item) => (
                <Link key={item} href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">
                  {item}<ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Quick Link</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/search" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <span className="text-sm font-black uppercase tracking-[.08em] text-[var(--slot4-accent)]">{session.name}</span>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Publish</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">
        © {year} {slot4BrandConfig.siteName}. Media distribution and public information.
      </div>
    </footer>
  )
}

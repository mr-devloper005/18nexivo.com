import Link from 'next/link'
import { ArrowRight, CheckCircle2, RadioTower, Send, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f2] text-[#06181b]">
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_.82fr] lg:items-center">
              <div className="logi-reveal rounded-3xl bg-[#001316] p-7 text-white sm:p-10">
                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]"><RadioTower className="h-4 w-4" /> {pagesContent.about.badge}</p>
                <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Media distribution built for clear public reach.</h1>
                <p className="mt-5 max-w-2xl text-sm font-semibold leading-8 text-white/72">{pagesContent.about.description}</p>
                <Link href="/media-distribution" className="mt-8 inline-flex rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase text-white">Browse updates <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-[0_22px_60px_rgba(0,19,22,.08)] sm:p-9">
                <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">About {slot4BrandConfig.siteName}</p>
                <div className="mt-5 grid gap-4 text-sm font-semibold leading-8 text-black/62">
                  {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>

            <div className="logi-stagger mt-8 grid gap-5 md:grid-cols-3">
              {pagesContent.about.values.map((value, index) => (
                <article key={value.title} className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,19,22,.1)]">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent)]" />
                    <span className="text-3xl font-black text-black/10">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-tight">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-black/58">{value.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-[var(--slot4-accent)] p-7 text-white sm:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-white/75"><ShieldCheck className="h-4 w-4" /> Distribution support</p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight">Need help publishing or routing your next announcement?</h2>
                </div>
                <Link href="/contact" className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-black uppercase text-[#06181b]">Contact us <Send className="ml-2 h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

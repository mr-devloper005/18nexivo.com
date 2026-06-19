import Link from 'next/link'
import { ArrowRight, CheckCircle2, RadioTower, Search, Send, ShieldCheck, Truck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, postHref, TextOnlyPostCard } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const quickPosts = (posts.length ? posts : []).slice(0, 4)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${slot4BrandConfig.siteName}: media distribution that moves fast.`

  return (
    <section className="relative overflow-hidden bg-[#001316] text-white">
      <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,#ff604a_0,transparent_28%),linear-gradient(120deg,transparent_0_40%,rgba(255,96,74,.7)_40%_52%,transparent_52%)]" />
      <div className={`${dc.shell.section} relative grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[.95fr_1.05fr]`}>
        <div className="logi-reveal">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--slot4-accent)]"><Truck className="h-4 w-4" /> {pagesContent.home.hero.badge}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.94] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/search" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-xs font-black uppercase text-white hover:bg-white hover:text-[#001316]">Search archive</Link>
          </div>
        </div>
        <div className="logi-stagger grid gap-4">
          <div className="logi-angle ml-auto w-full max-w-xl bg-[var(--slot4-accent)] p-8 text-white shadow-[0_28px_80px_rgba(0,0,0,.3)]">
            <p className="text-xs font-black uppercase tracking-[.18em] text-white/75">Current dispatch</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">{lead?.title || pagesContent.home.hero.featureCardTitle}</h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/78">{lead?.summary || pagesContent.home.hero.featureCardDescription}</p>
            {lead ? <Link href={postHref(primaryTask, lead, primaryRoute)} className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase">Open release <ArrowRight className="h-4 w-4" /></Link> : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Real-time release routing', 'Partner-ready summaries', 'Campaign archive search', 'Responsive newsroom flow'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur">
                <CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent)]" />
                <p className="mt-4 text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {quickPosts.length ? (
        <div className="relative border-t border-white/15 bg-white text-[#06181b]">
          <div className={`${dc.shell.section} grid gap-4 py-7 md:grid-cols-2 xl:grid-cols-4`}>
            {quickPosts.map((post, index) => <TextOnlyPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(4, 10)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#f4f4f2]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase text-[var(--slot4-accent)]">Our services</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Your freight, your media, one clear route.</h2>
        </div>
        <div className="logi-stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <TextOnlyPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 4} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[10] || posts[0]
  const briefs = posts.slice(11, 15).length ? posts.slice(11, 15) : posts.slice(1, 5)
  if (!feature) return null
  return (
    <section className="bg-[#001316] text-white">
      <div className={`${dc.shell.section} grid gap-10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-20`}>
        <div className="logi-reveal">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--slot4-accent)]"><ShieldCheck className="h-4 w-4" /> Why choose us</p>
          <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-5xl">The road to smarter media distribution starts here.</h2>
          <p className="mt-5 max-w-xl text-sm font-semibold leading-8 text-white/68">We turn release details into a readable public archive, keep campaigns discoverable, and preserve every button as a real route.</p>
          <Link href={postHref(primaryTask, feature, primaryRoute)} className={`${dc.button.accent} mt-8`}>Read feature <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(255,96,74,.92),rgba(255,96,74,.28)_55%,rgba(255,255,255,.08))] p-6">
          <div className="rounded-2xl bg-white p-7 text-[#06181b]">
            <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Featured dispatch</p>
            <h3 className="mt-4 text-3xl font-black leading-tight">{feature.title}</h3>
            <div className="mt-6 grid gap-2">
              {briefs.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 8)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--slot4-accent)]"><RadioTower className="h-4 w-4" /> Work process</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">How we move your updates.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {['Request and booking', 'Pickup and publish', 'Post-release support'].map((title, index) => (
              <div key={title} className="rounded-t-full bg-[var(--slot4-accent-soft)] px-6 pb-7 pt-16 text-center">
                <span className="text-sm font-black uppercase text-[var(--slot4-accent)]">Step - 0{index + 1}</span>
                <h3 className="mt-3 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/55">Release details are shaped into a concise media-distribution post and routed for discovery.</p>
              </div>
            ))}
          </div>
        </div>
        <form action="/search" className="mt-14 grid rounded-3xl bg-[#eef0ef] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="text-3xl font-black">Search the full archive</h3>
            <p className="mt-2 text-sm text-black/60">Explore every {taskLabel(primaryTask).toLowerCase()} published by {slot4BrandConfig.siteName}.</p>
          </div>
          <label className="mt-5 flex rounded-full bg-white sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4" />
            <input name="q" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="rounded-full bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#f4f4f2]">
      <div className={`${dc.shell.section} py-16`}>
        <div className="logi-angle bg-[var(--slot4-accent)] p-8 text-white sm:p-12">
          <p className="text-sm font-black uppercase text-white/75">Request support</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Ready to distribute your next media update?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex rounded-full bg-white px-7 py-3.5 text-xs font-black uppercase text-[#06181b]">Send a message <Send className="ml-2 h-4 w-4" /></Link>
            <Link href="/signup" className="inline-flex rounded-full border border-white/50 px-7 py-3.5 text-xs font-black uppercase text-white">Create account</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

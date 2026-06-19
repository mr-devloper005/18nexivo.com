'use client'

import { FileText, Mail, Megaphone, PhoneCall } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release intake', body: 'Share campaign details, source notes, and announcement requirements.' },
  { icon: Megaphone, title: 'Distribution planning', body: 'Coordinate categories, audience paths, timing, and publication support.' },
  { icon: Mail, title: 'Partner support', body: 'Ask about corrections, account access, routing, and follow-up visibility.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f2] text-[#06181b]">
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <aside className="rounded-3xl bg-[#001316] p-7 text-white sm:p-9">
                <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
                <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{pagesContent.contact.title}</h1>
                <p className="mt-5 text-sm font-semibold leading-8 text-white/70">{pagesContent.contact.description}</p>
                <div className="mt-8 rounded-2xl bg-white/10 p-5">
                  
                </div>
              </aside>

              <div className="rounded-3xl bg-white p-6 shadow-[0_22px_60px_rgba(0,19,22,.08)] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Send a message</p>
                <h2 className="mt-3 text-3xl font-black">{pagesContent.contact.formTitle}</h2>
                <EditableContactLeadForm />
              </div>
            </div>

            <div className="logi-stagger mt-8 grid gap-5 md:grid-cols-3">
              {desks.map((desk, index) => (
                <article key={desk.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-3xl font-black text-black/10">0{index + 1}</span></div>
                  <h3 className="mt-5 text-xl font-black">{desk.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/58">{desk.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

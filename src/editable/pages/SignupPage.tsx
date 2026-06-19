import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Send, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f2] px-4 py-12 text-[#06181b] sm:px-6 lg:px-8 lg:py-16">
        <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="rounded-3xl bg-white p-7 shadow-[0_22px_60px_rgba(0,19,22,.08)] sm:p-9">
            <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-3xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/60">
              Already have an account? <Link href="/login" className="inline-flex items-center font-black text-[var(--slot4-accent)]">{pagesContent.auth.signup.loginCta}<ArrowRight className="ml-1 h-4 w-4" /></Link>
            </p>
          </div>

          <div className="rounded-3xl bg-[#001316] p-7 text-white sm:p-9">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]"><ShieldCheck className="h-4 w-4" /> {pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-5 text-sm font-semibold leading-8 text-white/70">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-2xl bg-[var(--slot4-accent)] p-5">
              <Send className="h-6 w-6" />
              <p className="mt-3 text-sm font-semibold leading-7 text-white/85">Create once, then publish updates and route media-distribution content faster.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

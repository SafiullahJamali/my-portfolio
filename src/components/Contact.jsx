import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'
import { IconGithub, IconLinkedin, IconMail, IconPhone, IconPin } from './Icons'

const contacts = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: IconMail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: IconPhone,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    icon: IconPin,
  },
  {
    label: 'GitHub',
    value: 'SafiullahJamali',
    href: profile.github,
    icon: IconGithub,
  },
  {
    label: 'LinkedIn',
    value: 'safiullah-devloper',
    href: profile.linkedin,
    icon: IconLinkedin,
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!response.ok) throw new Error('Unable to send message right now.')
      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please email me directly.')
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful"
          subtitle="Open to software house roles, internships, and junior full stack opportunities."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contacts.map((item, index) => {
              const Icon = item.icon
              const inner = (
                <div className="glass flex items-start gap-4 rounded-2xl p-5">
                  <span className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-slate-100">{item.value}</p>
                  </div>
                </div>
              )
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <input type="hidden" name="_subject" value="Portfolio contact from Safiullah website" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-400/40 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-400/40 focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Subject</span>
              <input
                required
                name="subject"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-400/40 focus:ring-2"
                placeholder="How can I help?"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea
                required
                name="message"
                rows="6"
                className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-400/40 focus:ring-2"
                placeholder="Tell me about the role or project."
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 py-3 font-semibold text-slate-950 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Send Message'}
            </button>
            {status === 'sent' ? (
              <p className="mt-3 text-center text-sm text-cyan-300">
                Thank you. I will get back to you soon.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="mt-3 text-center text-sm text-rose-300">{error}</p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

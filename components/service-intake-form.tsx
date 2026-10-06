'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'

export function ServiceIntakeForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('submitting')
    setMessage('')
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    try {
      const response = await fetch('/api/service-requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service: form.get('service'), email: form.get('email'), details: form.get('details') }) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setState('success')
      setMessage('Thanks — a member of the Lifeline team will be in touch soon.')
      formElement.reset()
    } catch (error) {
      setState('error')
      setMessage(error instanceof Error ? error.message : 'Please try again.')
    }
  }

  if (state === 'success') return <div className="intake-success" role="status"><span><Check size={22} /></span><h3>Request received</h3><p>{message}</p><button className="text-link" onClick={() => setState('idle')}>Send another request <ArrowRight size={16} /></button></div>

  return <form className="intake-form" onSubmit={submit}><label>What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Home care and personal support</option><option>Residential housekeeping</option><option>Commercial housekeeping</option><option>Community or partnership support</option></select></label><label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label><label>How can we support you?<textarea name="details" placeholder="Share a few details..." rows={3} maxLength={2000} /><span className="sr-only" aria-live="polite">{message}</span></label><button className="admin-primary" type="submit" disabled={state === 'submitting'}>{state === 'submitting' ? <>Submitting <LoaderCircle className="spin" size={16}/></> : <>Submit request <ArrowRight size={16}/></>}</button>{state === 'error' && <small className="intake-error" role="alert">{message}</small>}<small>We&apos;ll use your information only to respond to this request. Privacy Policy · Terms of Use</small></form>
}

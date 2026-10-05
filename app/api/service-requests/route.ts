import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'
import { db } from '@/lib/db'

const allowedServices = new Set([
  'Home care and personal support',
  'Residential housekeeping',
  'Commercial housekeeping',
  'Community or partnership support',
])

export async function GET() {
  try {
    const result = await db.execute(sql`
      SELECT id, service, email, details, created_at
      FROM service_requests
      ORDER BY created_at DESC
      LIMIT 100
    `)
    return NextResponse.json({ requests: result.rows })
  } catch {
    return NextResponse.json({ error: 'We could not load service requests.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const service = typeof body.service === 'string' ? body.service.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const details = typeof body.details === 'string' ? body.details.trim() : ''

    if (!allowedServices.has(service) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid service and email.' }, { status: 400 })
    }
    if (details.length > 2000) return NextResponse.json({ error: 'Please keep your message under 2,000 characters.' }, { status: 400 })

    await db.execute(sql`INSERT INTO service_requests (service, email, details) VALUES (${service}, ${email}, ${details})`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'We could not submit your request. Please try again.' }, { status: 500 })
  }
}

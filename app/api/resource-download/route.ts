import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, org, resource, type } = body

    // Log to console (in production replace with email service or DB write)
    console.log('=== NEW RESOURCE DOWNLOAD ===')
    console.log(`Name:     ${name}`)
    console.log(`Email:    ${email}`)
    console.log(`Org:      ${org || 'Not provided'}`)
    console.log(`Resource: ${resource}`)
    console.log(`Type:     ${type}`)
    console.log(`Time:     ${new Date().toISOString()}`)
    console.log('==============================')

    // ── To send an email notification to admin ──────────────────────
    // Replace this block with your email provider (Resend, SendGrid, etc.)
    //
    // Example using Resend:
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'KSBI Website <noreply@ksbi.org>',
    //   to: 'hello@ksbi.org',
    //   subject: `New Resource Download: ${resource}`,
    //   html: `
    //     <h2>New Resource Download</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Organisation:</strong> ${org || 'Not provided'}</p>
    //     <p><strong>Resource:</strong> ${resource}</p>
    //     <p><strong>Type:</strong> ${type}</p>
    //     <p><strong>Time:</strong> ${new Date().toISOString()}</p>
    //   `,
    // })
    // ────────────────────────────────────────────────────────────────

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resource download notification failed:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

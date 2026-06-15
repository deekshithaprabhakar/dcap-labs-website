import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DCAP Labs — Building Ventures for a Civilizational Future',
  description: 'DCAP Labs builds ventures by bringing together founders, capital, knowledge, and execution — rooted in Dharma and focused on meaningful long-term value.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

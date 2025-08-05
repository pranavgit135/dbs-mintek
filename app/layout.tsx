import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DBS MINTEK PVT LTD',
  description: '',
  generator: 'GEOSoftech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

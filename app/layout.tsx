import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // change the title and description
  title: 'Chloe.Z Portfolio',
  description: 'Created by Chloe.Z',
  generator: 'Chloe',
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

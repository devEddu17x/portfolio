import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduardo - Portfolio',
  description: 'Backend Developer',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Forzar tema oscuro siempre
              document.documentElement.classList.add('dark');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Rocketseat para empresas',
  description:
    'Capacite times de tecnologia com uma plataforma de aprendizado para empresas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <NextTopLoader
          color="#FFF"
          initialPosition={0.3}
          crawlSpeed={200}
          height={4}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}

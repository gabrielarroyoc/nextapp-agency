import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NextTopLoader from "nextjs-toploader";
import { Header } from '../components/Header/index';

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={roboto.className}>
        <NextTopLoader color="#FFF"
          initialPosition={0.3}
          crawlSpeed={200}
          height={4} />
        <Header />
        {children}
      </body>
    </html>
  )
}

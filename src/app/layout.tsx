import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers/providers'
import Header from './components/Header'



const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  preload: false
})


export const metadata: Metadata = {
  title: 'Форма о фактах происшествий'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html className="light" lang='en' >
      <body
        className={`light ${inter.variable} antialiased `}>
        <div className='flex flex-col h-screen min-w-[768px] w-[100%] overflow-x-hidden'>
          <Providers >
          <Header/>
          {children}
        </Providers>
        </div>
      </body>
    </html>
  )
}

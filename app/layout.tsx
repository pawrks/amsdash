<<<<<<< HEAD
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default async function RootLayout({
  children,
=======
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import ModalProvider from '@/providers/modal-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import './globals.css'
import { ToasterProvider } from '@/providers/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMSdash',
  description: 'AMSdash'
}

export default function RootLayout({
  children
>>>>>>> origin/main
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
<<<<<<< HEAD
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
            <ToastProvider />
=======
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToasterProvider />
>>>>>>> origin/main
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/providers/ModalProvider'
import { SocketProvider } from '@/providers/SocketProvider'
import { QueryProvider } from '@/providers/QueryProvider'


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Discord clone by Ajay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className,
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='discord-theme'>
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>
                {children}
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

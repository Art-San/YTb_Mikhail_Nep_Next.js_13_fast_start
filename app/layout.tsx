import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'
import { Metadata } from 'next'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Home | Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* <body className={inter.className}></body> */}
            <body>
                <TheHeader />
                <main className="container">{children}</main>
                <TheFooter />
            </body>
        </html>
    )
}

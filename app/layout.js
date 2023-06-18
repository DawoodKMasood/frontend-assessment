import './globals.css'
import { Inter } from 'next/font/google'
import Provider from "@/recoil/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Assessment App',
  description: 'A sample app created for assessment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

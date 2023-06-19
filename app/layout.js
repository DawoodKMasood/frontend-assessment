import './globals.css'
import Provider from "@/recoil/provider"

export const metadata = {
  title: 'Frontend Assessment App',
  description: 'A sample app created for assessment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

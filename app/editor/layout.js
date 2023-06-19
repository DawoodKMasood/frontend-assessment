import '../globals.css'

export const metadata = {
  title: 'Editor for Topic',
  description: '',
}

export default function EditorLayout({ children }) {
  return (
    <main suppressHydrationWarning={true}>{children}</main>
  )
}

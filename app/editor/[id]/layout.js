import '../../globals.css'

export const metadata = {
  title: 'Editing',
  description: '',
}

export default function EditorLayout({ children }) {
  return (
    <div suppressHydrationWarning={true}>{children}</div>
  )
}

import '../../globals.css'

export const metadata = {
  title: 'Editor Example',
  description: 'This is just an example of editor!',
}

export default function EditorLayout({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      {children}
    </div>
  )
}

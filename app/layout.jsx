import './globals.css'

export const metadata = {
  title: 'Ben Amir | ICT & Computer Science Teacher',
  description: 'Portfolio and teaching resources by Ben Amir, Senior ICT & CS educator with international experience in IGCSE, A-Level, and digital education.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.JS 101',
  description: 'A simple Next.JS example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li>
            <a href="/" className="text-blue-600">Home</a>
          </li>
          <li>
            <a href="/about" className="text-blue-600">About</a>
          </li>
          <li>
            <a href="/blog" className="text-blue-600">Blog</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}

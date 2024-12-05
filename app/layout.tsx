import { Inter } from 'next/font/google'
import './styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shivangi - Full Stack MERN Developer',
  description: 'Portfolio of Shivangi, a full stack MERN developer passionate about frontend technologies and JavaScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


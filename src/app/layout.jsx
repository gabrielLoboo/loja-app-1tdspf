import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '4 Entrega - Challenge',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
        <Cabecalho />  
        {children}
        <Rodape />

      </body>
    </html>
  )
}

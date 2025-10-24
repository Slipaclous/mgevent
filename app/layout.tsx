import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'MG Event - Sites d\'invitation d\'événements sur mesure',
  description: 'Créez des sites d\'invitation exceptionnels pour vos événements. Mariages, soirées, anniversaires... Des designs uniques et personnalisés.',
  keywords: 'site invitation, événement, mariage, soirée, design web, création site',
  authors: [{ name: 'MG Event' }],
  openGraph: {
    title: 'MG Event - Sites d\'invitation d\'événements',
    description: 'Des sites d\'invitation exceptionnels pour vos événements',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <svg 
                  viewBox="0 0 40 40" 
                  fill="none"
                  className="w-full h-full"
                >
                  {/* Diamant ornemental */}
                  <path 
                    d="M20 2 L38 20 L20 38 L2 20 Z" 
                    stroke="#E8D5B7" 
                    strokeWidth="1.5" 
                    fill="none"
                    className="transition-all duration-500 group-hover:fill-[#E8D5B7]/10"
                  />
                  {/* Point central */}
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="3" 
                    fill="#E8D5B7"
                  />
                </svg>
              </div>
              <span className="font-serif text-xl text-[#1A1F3A] tracking-tight">
                MG Event
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-[#1A1F3A] font-light text-sm tracking-wide uppercase transition-colors duration-300 hover:text-[#E8D5B7]"
                >
                  {item.name}
                  {/* Underline animé */}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#E8D5B7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group relative px-6 py-3 bg-[#1A1F3A] text-white overflow-hidden text-sm tracking-wider uppercase font-light transition-colors duration-300 hover:bg-[#E8D5B7] hover:text-[#1A1F3A]"
              >
                <span className="relative z-10">
                  Créer mon événement
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1A1F3A] hover:text-[#E8D5B7] transition-colors duration-300"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop avec blur */}
            <motion.div
              className="fixed inset-0 bg-[#1A1F3A]/95 backdrop-blur-lg z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel mobile qui glisse depuis la droite */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-8">
                {/* Close Button */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#1A1F3A] hover:text-[#E8D5B7] transition-colors duration-300"
                    aria-label="Fermer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links Mobile */}
                <nav className="space-y-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block font-serif text-3xl text-[#1A1F3A] hover:text-[#E8D5B7] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Mobile */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-8 py-4 bg-[#E8D5B7] text-[#1A1F3A] text-center text-sm tracking-wider uppercase font-light hover:bg-[#1A1F3A] hover:text-white transition-colors duration-300"
                  >
                    Créer mon événement
                  </Link>
                </motion.div>

                {/* Ornement décoratif */}
                <motion.div 
                  className="mt-16 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                    <path 
                      d="M2 20 L20 2 L38 20 L20 38 L2 20 Z M42 20 L60 2 L78 20 L60 38 L42 20 Z" 
                      stroke="#E8D5B7" 
                      strokeWidth="1.5" 
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
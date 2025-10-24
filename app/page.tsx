'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar,
  Sparkles,
  Star
} from 'lucide-react'

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const features = [
    {
      number: "01",
      title: "Sur-mesure",
      description: "Chaque événement mérite son propre langage visuel. Nous créons des sites qui racontent votre histoire."
    },
    {
      number: "02",
      title: "Expérience",
      description: "Plus qu'un simple site, une expérience immersive qui captive vos invités dès le premier clic."
    },
    {
      number: "03",
      title: "Excellence",
      description: "Un souci du détail obsessionnel pour que chaque pixel serve votre célébration."
    }
  ]

  // Témoignages supprimés - à ajouter quand nous aurons de vrais clients

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section - Editorial */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231A1F3A" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              {/* Ornement supérieur */}
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <path d="M2 20 L20 2 L38 20 L20 38 L2 20 Z M42 20 L60 2 L78 20 L60 38 L42 20 Z" 
                        stroke="#E8D5B7" 
                        strokeWidth="1.5" 
                        fill="none"/>
                </svg>
              </motion.div>

              <h1 className="font-serif text-6xl lg:text-8xl mb-8 text-[#1A1F3A] tracking-tight leading-[0.95]">
                L'art de<br />
                <span className="italic font-light">l'invitation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#4A5568] mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                Des expériences digitales conçues avec passion<br className="hidden lg:block" />
                pour célébrer vos moments les plus précieux
              </p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  href="/contact" 
                  className="group relative px-10 py-5 bg-[#1A1F3A] text-white overflow-hidden transition-all duration-500 hover:bg-[#E8D5B7] hover:text-[#1A1F3A]"
                >
                  <span className="relative z-10 flex items-center font-light tracking-wider text-sm uppercase">
                    Commencer
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <Link 
                  href="/realisations" 
                  className="group px-10 py-5 border border-[#1A1F3A] text-[#1A1F3A] hover:bg-[#1A1F3A] hover:text-white transition-all duration-300"
                >
                  <span className="font-light tracking-wider text-sm uppercase">
                    Nos créations
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Mockup style */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative bg-white shadow-2xl border border-[#E8E8E8]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8E8E8]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-4 bg-[#F5F5F5] rounded px-3 py-1 text-xs text-[#999]">
                    mgevent.fr/sarah-marc
                  </div>
                </div>
                
                {/* Content mockup */}
                <div className="p-12 lg:p-20 bg-gradient-to-br from-[#FAFAF8] to-[#F5F5F0]">
                  <div className="text-center">
                    <div className="inline-block mb-6">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="28" stroke="#E8D5B7" strokeWidth="1.5" fill="none"/>
                        <path d="M30 15 L35 25 L45 27 L37.5 35 L40 45 L30 39 L20 45 L22.5 35 L15 27 L25 25 Z" 
                              fill="#E8D5B7"/>
                      </svg>
                    </div>
                    
                    <h3 className="font-serif text-4xl mb-3 text-[#1A1F3A]">
                      Sarah & Marc
                    </h3>
                    
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px w-12 bg-[#E8D5B7]" />
                      <span className="text-[#E8D5B7] font-light tracking-widest text-sm">
                        15 JUIN 2024
                      </span>
                      <div className="h-px w-12 bg-[#E8D5B7]" />
                    </div>
                    
                    <p className="text-[#4A5568] mb-8 font-light italic">
                      Vous êtes invités à célébrer notre union
                    </p>
                    
                    <div className="flex justify-center gap-4">
                      <div className="px-6 py-2 border border-[#E8D5B7] text-[#E8D5B7] text-xs tracking-wider uppercase">
                        Confirmer
                      </div>
                      <div className="px-6 py-2 bg-[#E8D5B7] text-[#1A1F3A] text-xs tracking-wider uppercase">
                        Programme
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 border border-[#E8D5B7]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#E8D5B7]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimal */}
      <section className="py-24 border-y border-[#E8E8E8] bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: "150+", label: "Événements" },
              { number: "98%", label: "Satisfaction" },
              { number: "24h", label: "Livraison" },
              { number: "5.0", label: "Note moyenne" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-serif text-5xl lg:text-6xl text-[#E8D5B7] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#4A5568] text-sm tracking-widest uppercase font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Editorial Grid */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-2xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl lg:text-6xl text-[#1A1F3A] mb-6 leading-tight">
              Une approche<br />
              <span className="italic font-light">différente</span>
            </h2>
            <p className="text-xl text-[#4A5568] font-light leading-relaxed">
              Nous ne créons pas des sites web. Nous façonnons des expériences 
              qui amplifient l'émotion de vos célébrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="font-serif text-7xl text-[#E8D5B7]/20 group-hover:text-[#E8D5B7]/40 transition-colors duration-500">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-[#1A1F3A]">
                  {feature.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed font-light">
                  {feature.description}
                </p>
                <div className="w-12 h-px bg-[#E8D5B7] mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - Bold & Elegant */}
      <section className="py-32 bg-[#1A1F3A] text-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Sparkles className="h-12 w-12 text-[#E8D5B7]" />
            </div>

            <h2 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
              Créons ensemble<br />
              <span className="italic font-light">votre célébration</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Chaque projet est une nouvelle histoire à raconter. 
              Commençons la vôtre aujourd'hui.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="group px-12 py-5 bg-[#E8D5B7] text-[#1A1F3A] hover:bg-white transition-all duration-300"
              >
                <span className="flex items-center justify-center font-light tracking-wider text-sm uppercase">
                  Discutons de votre projet
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link 
                href="/tarifs" 
                className="px-12 py-5 border border-white/30 text-white hover:bg-white hover:text-[#1A1F3A] transition-all duration-300"
              >
                <span className="font-light tracking-wider text-sm uppercase">
                  Nos formules
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Heart, 
  Users, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Palette,
  Smartphone,
  Gift
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'mariage',
      icon: <Heart className="h-12 w-12" />,
      title: "Sites de Mariage",
      subtitle: "Votre union mérite le plus beau",
      description: "Créez un site d'invitation élégant et romantique pour votre mariage. Design personnalisé, gestion des RSVP, galerie photos et bien plus encore.",
      features: [
        "Design sur mesure et romantique",
        "Gestion des invitations et RSVP",
        "Galerie photos interactive",
        "Informations pratiques (lieu, hébergement)",
        "Support multilingue"
      ],
      price: "À partir de 299€",
      color: "bg-[#E8D5B7]"
    },
    {
      id: 'soiree',
      icon: <Sparkles className="h-12 w-12" />,
      title: "Sites de Soirée",
      subtitle: "Fêtez en grand style",
      description: "Organisez des soirées mémorables avec un site d'invitation moderne et interactif. Parfait pour anniversaires, événements d'entreprise et célébrations.",
      features: [
        "Design moderne et dynamique",
        "Système d'inscription en ligne",
        "Galerie de photos en temps réel",
        "Intégration réseaux sociaux"
      ],
      price: "À partir de 199€",
      color: "bg-[#E8D5B7]"
    },
    {
      id: 'anniversaire',
      icon: <Gift className="h-12 w-12" />,
      title: "Sites d'Anniversaire",
      subtitle: "Célébrez chaque moment",
      description: "Des sites d'anniversaire personnalisés pour tous les âges. Créez des souvenirs digitaux qui dureront toute une vie.",
      features: [
        "Design adapté à l'âge",
        "Livres d'or numériques",
        "Liste de cadeaux",
        "Compte à rebours",
        "Partage facile"
      ],
      price: "À partir de 149€",
      color: "bg-[#E8D5B7]"
    },
    {
      id: 'sur-mesure',
      icon: <Palette className="h-12 w-12" />,
      title: "Sites Sur Mesure",
      subtitle: "Votre vision, notre expertise",
      description: "Des sites complètement personnalisés pour tous types d'événements. Laissez libre cours à votre créativité avec notre équipe d'experts.",
      features: [
        "Design 100% personnalisé",
        "Fonctionnalités sur mesure",
        "Intégrations avancées",
        "Support dédié",
        "Maintenance incluse"
      ],
      price: "Sur devis",
      color: "bg-[#E8D5B7]"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Nous échangeons sur votre vision, vos besoins et vos préférences pour créer le site parfait.",
      icon: <Users className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Conception",
      description: "Notre équipe crée un design unique qui reflète parfaitement l'identité de votre événement.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Développement",
      description: "Nous développons votre site avec les dernières technologies pour une expérience optimale.",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Livraison",
      description: "Votre site est livré dans les délais avec toutes les fonctionnalités demandées et testées.",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ]

  const technologies = [
    { name: "Next.js", description: "Performance optimale" },
    { name: "React", description: "Interface moderne" },
    { name: "TypeScript", description: "Code sécurisé" },
    { name: "Tailwind CSS", description: "Design responsive" },
    { name: "Framer Motion", description: "Animations fluides" },
    { name: "Supabase", description: "Base de données" }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Texture subtile */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A1F3A\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Ornement */}
            <div className="flex justify-center mb-8">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path 
                  d="M2 20 L20 2 L38 20 L20 38 L2 20 Z M42 20 L60 2 L78 20 L60 38 L42 20 Z" 
                  stroke="#E8D5B7" 
                  strokeWidth="1.5" 
                  fill="none"
                />
              </svg>
            </div>

            <h1 className="font-serif text-6xl lg:text-7xl mb-6 text-[#1A1F3A] leading-tight">
              Nos{' '}
              <span className="italic font-light">services</span>
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
              Découvrez notre gamme complète de services pour créer des sites d'invitation 
              exceptionnels. Chaque projet est unique et mérite une attention particulière.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white border border-[#E8E8E8] p-10 hover:shadow-elegant transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 ${service.color} text-[#1A1F3A] mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  {service.icon}
                </div>
                
                <h3 className="font-serif text-3xl mb-2 text-[#1A1F3A]">
                  {service.title}
                </h3>
                <p className="text-[#E8D5B7] mb-4 tracking-wide text-sm uppercase font-light">
                  {service.subtitle}
                </p>
                <p className="text-[#4A5568] mb-8 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-[#1A1F3A] mb-4 font-light">
                    Fonctionnalités incluses
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-[#4A5568] font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8D5B7] mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#E8E8E8]">
                  <div className="font-serif text-2xl text-[#E8D5B7]">
                    {service.price}
                  </div>
                  <Link 
                    href="/contact"
                    className="group/btn px-6 py-3 bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A] transition-all duration-300 inline-flex items-center text-sm tracking-wider uppercase font-light"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl lg:text-6xl mb-6 text-[#1A1F3A]">
              Notre{' '}
              <span className="italic font-light">processus</span>
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-light leading-relaxed">
              Un processus simple et transparent pour créer votre site d'invitation parfait
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 border-2 border-[#E8D5B7] flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-[#E8D5B7] group-hover:scale-110">
                    <div className="text-[#E8D5B7] group-hover:text-[#1A1F3A] transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <div className="font-serif text-6xl text-[#E8D5B7]/10 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-3 text-[#1A1F3A]">
                  {step.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl lg:text-6xl mb-6 text-[#1A1F3A]">
              Technologies{' '}
              <span className="italic font-light">modernes</span>
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-light leading-relaxed">
              Nous utilisons les dernières technologies pour créer des sites rapides, 
              sécurisés et optimisés pour tous les appareils.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-[#E8E8E8] p-6 hover:shadow-soft transition-all duration-300 group-hover:border-[#E8D5B7]">
                  <h3 className="font-serif text-[#1A1F3A] mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] font-light">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#1A1F3A] text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Sparkles className="h-12 w-12 text-[#E8D5B7]" />
            </div>

            <h2 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
              Prêt à<br />
              <span className="italic font-light">commencer ?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet 
              et recevoir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-[#E8D5B7] text-[#1A1F3A] hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Demander un devis
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link 
                href="/tarifs" 
                className="px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-[#1A1F3A] transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Voir nos tarifs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
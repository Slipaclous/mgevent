'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Check, 
  X, 
  Star,
  ArrowRight,
  Heart,
  Sparkles,
  Crown,
  Palette,
  Smartphone,
  Camera,
  Globe,
  Users,
  Shield,
  Clock,
  Headphones
} from 'lucide-react'

export default function TarifsPage() {
  const plans = [
    {
      name: "Classique",
      icon: <Heart className="h-8 w-8" />,
      price: "299€",
      originalPrice: "399€",
      description: "Parfait pour les événements simples et élégants",
      popular: false,
      features: [
        { name: "Design parmi templates prédéfinis", included: true },
        { name: "Site responsive", included: true },
        { name: "Galerie photos (20 photos)", included: true },
        { name: "Formulaire RSVP", included: true },
        { name: "Informations pratiques", included: true },
        { name: "Optimisation mobile", included: true },
        { name: "Support par email", included: true },
        { name: "Hébergement 6 mois", included: true },
        { name: "Domaine personnalisé", included: false },
        { name: "Intégration réseaux sociaux", included: false },
        { name: "Analytics avancés", included: false },
        { name: "Maintenance 1 an", included: false }
      ]
    },
    {
      name: "Premium",
      icon: <Sparkles className="h-8 w-8" />,
      price: "499€",
      originalPrice: "699€",
      description: "Pour des événements mémorables avec des fonctionnalités avancées",
      popular: true,
      features: [
        { name: "Design personnalisé", included: true },
        { name: "Site responsive", included: true },
        { name: "Galerie photos (100 photos)", included: true },
        { name: "Formulaire RSVP", included: true },
        { name: "Informations pratiques", included: true },
        { name: "Optimisation mobile", included: true },
        { name: "Support par email", included: true },
        { name: "Hébergement 1 an", included: true },
        { name: "Domaine personnalisé", included: true },
        { name: "Intégration réseaux sociaux", included: true },
        { name: "Analytics avancés", included: false },
        { name: "Maintenance 1 an", included: false }
      ]
    },
    {
      name: "Sur Mesure",
      icon: <Crown className="h-8 w-8" />,
      price: "Sur devis",
      originalPrice: null,
      description: "La solution ultime pour des événements exceptionnels",
      popular: false,
      features: [
        { name: "Design 100% personnalisé", included: true },
        { name: "Site responsive", included: true },
        { name: "Galerie photos illimitée", included: true },
        { name: "Formulaire RSVP avancé", included: true },
        { name: "Informations pratiques", included: true },
        { name: "Optimisation mobile", included: true },
        { name: "Support prioritaire par email", included: true },
        { name: "Hébergement premium", included: true },
        { name: "Domaine personnalisé", included: true },
        { name: "Intégration réseaux sociaux", included: true },
        { name: "Analytics avancés", included: true },
        { name: "Maintenance 2 ans", included: true }
      ]
    }
  ]

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design personnalisé",
      description: "Chaque site est créé sur mesure selon vos goûts et votre style"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "100% Responsive",
      description: "Optimisé pour tous les appareils : mobile, tablette et desktop"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Galerie photos",
      description: "Mettez en valeur vos plus beaux moments avec des galeries interactives"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Domaine personnalisé",
      description: "Votre propre nom de domaine pour un site professionnel"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestion des invités",
      description: "Système de RSVP et gestion des listes d'invités"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sécurisé",
      description: "Protection des données et sécurité maximale"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Livraison rapide",
      description: "Votre site livré en 24-48h selon la complexité"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support inclus",
      description: "Assistance technique et modifications incluses"
    }
  ]

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "La plupart de nos sites sont livrés en 24-48h. Pour les projets sur mesure, comptez 3-7 jours selon la complexité."
    },
    {
      question: "Puis-je modifier mon site après la livraison ?",
      answer: "Oui ! Nous offrons 3 modifications gratuites dans le mois suivant la livraison. Des modifications supplémentaires sont possibles avec un forfait."
    },
    {
      question: "Mon site sera-t-il visible sur Google ?",
      answer: "La visibilité sur Google dépend de votre formule : les plans Premium et Sur Mesure incluent l'optimisation SEO avancée pour une meilleure visibilité sur les moteurs de recherche."
    },
    {
      question: "Que se passe-t-il après 1 an ?",
      answer: "Le site est mis hors-ligne sauf demande expresse du client. Nous proposons des forfaits de maintenance et de renouvellement à des tarifs préférentiels."
    },
    {
      question: "Puis-je avoir mon propre nom de domaine ?",
      answer: "Le nom de domaine personnalisé est disponible selon votre plan : inclus dans les formules Premium et Sur Mesure, et optionnel pour le plan Classique."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Texture */}
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
              <span className="italic font-light">tarifs</span>
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
              Des tarifs transparents et adaptés à tous les budgets. 
              Choisissez la formule qui correspond le mieux à votre événement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white border ${plan.popular ? 'border-[#E8D5B7] shadow-elegant' : 'border-[#E8E8E8]'} p-10 relative group hover:shadow-elegant transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#E8D5B7] text-[#1A1F3A] px-6 py-2 text-xs font-light tracking-wider uppercase">
                      Le plus populaire
                    </div>
                  </div>
                )}

                <div className={`inline-flex p-4 ${plan.popular ? 'bg-[#E8D5B7]' : 'bg-[#E8D5B7]/20'} text-[#1A1F3A] mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  {plan.icon}
                </div>

                <h3 className="font-serif text-3xl mb-2 text-[#1A1F3A]">
                  {plan.name}
                </h3>
                <p className="text-[#4A5568] mb-8 font-light leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="font-serif text-5xl text-[#E8D5B7]">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-xl text-[#4A5568]/50 line-through ml-3 font-light">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="text-[#E8D5B7] text-sm font-light">
                      Économisez {parseInt(plan.originalPrice) - parseInt(plan.price)}€
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <div className="w-4 h-4 rounded-full bg-[#E8D5B7] mt-0.5 mr-3 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 text-[#1A1F3A]" />
                        </div>
                      ) : (
                        <X className="h-4 w-4 text-[#4A5568]/30 mt-0.5 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm font-light ${feature.included ? 'text-[#1A1F3A]' : 'text-[#4A5568]/50'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 font-light text-sm tracking-wider uppercase transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A]'
                      : 'border border-[#1A1F3A] text-[#1A1F3A] hover:bg-[#1A1F3A] hover:text-white'
                  }`}
                >
                  {plan.price === 'Sur devis' ? 'Demander un devis' : 'Choisir ce plan'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Pourquoi nous{' '}
              <span className="italic font-light">choisir</span> ?
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-light leading-relaxed">
              Nous nous engageons à vous offrir la meilleure expérience possible 
              pour créer le site d'invitation parfait pour votre événement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-[#E8E8E8] p-8 hover:shadow-soft hover:border-[#E8D5B7] transition-all duration-300">
                  <div className="text-[#E8D5B7] mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-lg mb-3 text-[#1A1F3A]">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Questions{' '}
              <span className="italic font-light">fréquentes</span>
            </h2>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto font-light leading-relaxed">
              Retrouvez les réponses aux questions les plus courantes 
              sur nos services et tarifs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-[#E8E8E8] p-8 hover:shadow-soft transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-serif text-lg text-[#1A1F3A] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#1A1F3A] text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-tarifs" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-tarifs)" />
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
              Prêt à créer<br />
              <span className="italic font-light">votre événement ?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Contactez-nous dès maintenant pour discuter de votre projet 
              et recevoir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-[#E8D5B7] text-[#1A1F3A] hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link 
                href="/realisations" 
                className="px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-[#1A1F3A] transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
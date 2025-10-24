'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const eventTypes = [
    'Mariage',
    'Anniversaire',
    'Soirée d\'entreprise',
    'Événement privé',
    'Autre'
  ]


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact.mgevent@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: "+32 471 84 34 51",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: "+32 473 25 66 33",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      content: "9h - 18h",
      description: "Lundi au Vendredi (Belgique)"
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-6 w-6" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="h-6 w-6" />, href: '#' }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#FAFAF8]">
        <motion.div 
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white border border-[#E8E8E8] p-16">
            <div className="w-20 h-20 bg-[#E8D5B7]/10 border-2 border-[#E8D5B7] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-[#E8D5B7]" />
            </div>
            <h1 className="font-serif text-4xl text-[#1A1F3A] mb-4">
              Message envoyé<br />
              <span className="italic font-light">avec succès !</span>
            </h1>
            <p className="text-[#4A5568] mb-8 font-light leading-relaxed">
              Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais 
              pour discuter de votre projet.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-4 bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A] transition-all duration-300 text-sm tracking-wider uppercase font-light"
            >
              Envoyer un autre message
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

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
              Contactez{' '}
              <span className="italic font-light">nous</span>
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
              Prêt à créer le site d'invitation parfait pour votre événement ? 
              Parlons de votre projet et donnons vie à vos idées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white border border-[#E8E8E8] p-10">
                <h2 className="font-serif text-3xl mb-2 text-[#1A1F3A]">
                  Parlons de votre projet
                </h2>
                <p className="text-[#4A5568] mb-8 font-light">
                  Remplissez ce formulaire et nous vous recontacterons rapidement
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 font-light"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 font-light"
                        placeholder="votre@email.fr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 font-light"
                      placeholder="01 23 45 67 89"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                      Type d'événement *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 font-light"
                    >
                      <option value="">Sélectionnez un type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                      Date de l'événement
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-[#1A1F3A] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#E8E8E8] bg-white text-[#1A1F3A] focus:border-[#E8D5B7] focus:outline-none transition-colors duration-200 resize-none font-light"
                      placeholder="Décrivez votre projet, vos idées, vos besoins..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#E8D5B7] focus:ring-[#E8D5B7] border-[#E8E8E8] mt-1"
                    />
                    <label className="ml-3 text-sm text-[#4A5568] font-light">
                      Je souhaite recevoir les actualités et offres de MG Event
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-10 py-4 bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A] transition-all duration-300 text-sm tracking-wider uppercase font-light inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 bg-white border border-[#E8E8E8] p-6 hover:shadow-soft transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E8D5B7] flex items-center justify-center text-[#1A1F3A]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1A1F3A] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-[#1A1F3A] font-light">
                        {info.content}
                      </p>
                      <p className="text-sm text-[#4A5568] font-light">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white border border-[#E8E8E8] p-6">
                <h3 className="font-serif text-[#1A1F3A] mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 border border-[#E8E8E8] flex items-center justify-center text-[#4A5568] hover:text-[#E8D5B7] hover:border-[#E8D5B7] transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#1A1F3A] text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
              Prêt à<br />
              <span className="italic font-light">commencer ?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              N'attendez plus ! Contactez-nous dès aujourd'hui pour transformer 
              votre événement en une expérience digitale inoubliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+32471843451" 
                className="px-10 py-5 bg-[#E8D5B7] text-[#1A1F3A] hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Appeler maintenant
                <Phone className="ml-3 h-4 w-4" />
              </a>
              <a 
                href="mailto:contact.mgevent@gmail.com" 
                className="px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-[#1A1F3A] transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Envoyer un email
                <Mail className="ml-3 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Heart, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight,
  Eye,
  ExternalLink,
  X,
  Star,
  MapPin,
  Camera
} from 'lucide-react'

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = [
    { id: 'all', name: 'Tous', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'mariage', name: 'Mariages', icon: <Heart className="h-5 w-5" /> },
    { id: 'soiree', name: 'Soirées', icon: <Calendar className="h-5 w-5" /> },
    { id: 'anniversaire', name: 'Anniversaires', icon: <Users className="h-5 w-5" /> }
  ]

  const projects = [
    // Aucun projet pour le moment - nous venons de lancer notre activité
    // Les projets de nos clients seront ajoutés ici au fur et à mesure
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)


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
              <span className="italic font-light">réalisations</span>
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
              Nous venons de lancer notre activité et nous sommes impatients de créer nos premiers projets. 
              Chaque site sera unique et reflétera parfaitement l'identité de nos clients.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Filter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-light text-sm tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#1A1F3A] text-white'
                    : 'bg-white text-[#1A1F3A] border border-[#E8E8E8] hover:border-[#E8D5B7]'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white border border-[#E8E8E8] overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                    <div className="text-[#1A1F3A] text-center relative z-10">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-serif text-lg">{project.type}</p>
                    </div>
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-[#1A1F3A]/0 group-hover:bg-[#1A1F3A]/80 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Eye className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-light tracking-wider uppercase text-[#E8D5B7] bg-[#E8D5B7]/10 px-3 py-1">
                      {project.type}
                    </span>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-[#E8D5B7] fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl text-[#1A1F3A] mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#4A5568] text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#4A5568] mb-4 font-light">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-[#E8D5B7]" />
                      {project.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 text-[#E8D5B7]" />
                      {project.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs text-[#4A5568] border border-[#E8E8E8] px-2 py-1 font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full text-[#1A1F3A] font-light text-sm tracking-wider uppercase hover:text-[#E8D5B7] transition-colors duration-300 flex items-center justify-center group/btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    Voir le projet
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-[#E8D5B7]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Sparkles className="h-12 w-12 text-[#E8D5B7]" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1F3A] mb-4">
                  Bientôt nos premières créations
                </h3>
                <p className="text-[#4A5568] font-light leading-relaxed mb-8">
                  Nous venons de lancer notre activité et nous sommes impatients de créer nos premiers sites d'invitation. 
                  Soyez parmi nos premiers clients et découvrez la qualité de notre travail !
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A] transition-all duration-300 text-sm tracking-wider uppercase font-light"
                >
                  Devenir notre premier client
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#1A1F3A]/95 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className={`h-72 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                <div className="text-[#1A1F3A] text-center">
                  <Camera className="h-16 w-16 mx-auto mb-4" />
                  <h2 className="font-serif text-3xl mb-2">{selectedProject.title}</h2>
                  <p className="text-lg font-light tracking-wider uppercase text-sm">{selectedProject.type}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-white/90 hover:bg-white p-2 transition-colors duration-300"
              >
                <X className="h-6 w-6 text-[#1A1F3A]" />
              </button>
            </div>
            
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-[#E8E8E8]">
                <div className="flex items-center text-[#4A5568] font-light">
                  <Calendar className="h-5 w-5 mr-2 text-[#E8D5B7]" />
                  <span>{selectedProject.date}</span>
                </div>
                <div className="flex items-center text-[#4A5568] font-light">
                  <MapPin className="h-5 w-5 mr-2 text-[#E8D5B7]" />
                  <span>{selectedProject.location}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(selectedProject.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#E8D5B7] fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-[#4A5568] mb-8 leading-relaxed font-light text-lg">
                {selectedProject.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase text-[#1A1F3A] mb-4 font-light">
                  Fonctionnalités
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-[#E8D5B7]/10 text-[#1A1F3A] px-4 py-2 text-sm font-light"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#1A1F3A] text-white hover:bg-[#E8D5B7] hover:text-[#1A1F3A] transition-all duration-300 text-sm tracking-wider uppercase font-light inline-flex items-center"
                >
                  Créer un projet similaire
                </Link>
                <button className="px-8 py-4 border border-[#1A1F3A] text-[#1A1F3A] hover:bg-[#1A1F3A] hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-light inline-flex items-center">
                  Voir le site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-[#1A1F3A] text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-realisations" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-realisations)" />
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
              Inspiré par nos<br />
              <span className="italic font-light">réalisations ?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Créons ensemble le site d'invitation parfait pour votre événement. 
              Chaque projet est une nouvelle aventure créative.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-[#E8D5B7] text-[#1A1F3A] hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wider uppercase font-light"
              >
                Commencer mon projet
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
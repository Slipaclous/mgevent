import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Sites de mariage', href: '/services#mariage' },
      { name: 'Sites de soirée', href: '/services#soiree' },
      { name: 'Sites d\'anniversaire', href: '/services#anniversaire' },
      { name: 'Sites sur mesure', href: '/services#sur-mesure' },
    ],
    company: [
      { name: 'À propos', href: '/a-propos' },
      { name: 'Portfolio', href: '/realisations' },
      { name: 'Tarifs', href: '/tarifs' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/confidentialite' },
      { name: 'CGV', href: '/cgv' },
    ]
  }

  return (
    <footer className="bg-[#1A1F3A] text-white relative overflow-hidden">
      {/* Texture subtile de fond */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative">
        {/* Ornement supérieur */}
        <div className="flex justify-center mb-16">
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
            <path 
              d="M2 20 L20 2 L38 20 L20 38 L2 20 Z M42 20 L60 2 L78 20 L60 38 L42 20 Z" 
              stroke="#E8D5B7" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path 
                    d="M20 2 L38 20 L20 38 L2 20 Z" 
                    stroke="#E8D5B7" 
                    strokeWidth="1.5" 
                    fill="none"
                  />
                  <circle cx="20" cy="20" r="3" fill="#E8D5B7" />
                </svg>
              </div>
              <span className="font-serif text-xl">MG Event</span>
            </Link>
            <p className="text-white/60 mb-8 leading-relaxed font-light">
              Créons ensemble des expériences digitales exceptionnelles pour célébrer vos moments précieux.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8D5B7] hover:text-[#E8D5B7] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8D5B7] hover:text-[#E8D5B7] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8D5B7] hover:text-[#E8D5B7] transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-[#E8D5B7] mb-6 font-light">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white font-light transition-colors duration-300 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E8D5B7] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-[#E8D5B7] mb-6 font-light">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white font-light transition-colors duration-300 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E8D5B7] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-[#E8D5B7] mb-6 font-light">
              Contact
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact.mgevent@gmail.com"
                className="flex items-start space-x-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="h-4 w-4 mt-1 text-[#E8D5B7]" />
                <span className="font-light">contact.mgevent@gmail.com</span>
              </a>
              <a 
                href="tel:+32471843451"
                className="flex items-start space-x-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="h-4 w-4 mt-1 text-[#E8D5B7]" />
                <span className="font-light">+32 471 84 34 51</span>
              </a>
              <a 
                href="tel:+32473256633"
                className="flex items-start space-x-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="h-4 w-4 mt-1 text-[#E8D5B7]" />
                <span className="font-light">+32 473 25 66 33</span>
              </a>
              <div className="flex items-start space-x-3 text-white/60">
                <MapPin className="h-4 w-4 mt-1 text-[#E8D5B7]" />
                <span className="font-light">Belgique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation élégante */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-[#1A1F3A]">
              <div className="w-2 h-2 rounded-full bg-[#E8D5B7]" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm font-light tracking-wide">
            © {currentYear} MG Event · Tous droits réservés
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/40 hover:text-white text-sm font-light transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
import { Heart, Calendar, Users, Sparkles, Crown, Palette, Smartphone, Camera, Music, Gift, Globe, Clock, Star } from 'lucide-react'

export const services = [
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
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50"
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
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50"
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
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
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
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-vre-50"
  }
]

export const stats = [
  { number: "0", label: "Événements créés" },
  { number: "100%", label: "Engagement qualité" },
  { number: "24h", label: "Délai de livraison" },
  { number: "★", label: "Excellence garantie" }
]

// Témoignages supprimés - à ajouter quand nous aurons de vrais clients

export const features = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Design sur mesure",
    description: "Chaque site reflète l'unicité de votre événement avec un design personnalisé"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Responsive & moderne",
    description: "Optimisé pour tous les appareils avec les dernières technologies web"
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Galerie photos",
    description: "Mettez en valeur vos plus beaux moments avec des galeries interactives"
  }
]

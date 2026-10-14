/* ═══════════════════════════════════════════════════════════════
   CYBERCLIK — FICHIER DE CONTENU ÉDITABLE
   ─────────────────────────────────────────────────────────────
   ✏️  TOUTE la galerie, ses légendes et filtres se modifient ICI.
       Ajoutez / supprimez / réordonnez les affiches sans toucher
       au HTML : le site se met à jour tout seul au rechargement.

   POUR AJOUTER UNE AFFICHE :
     1. Déposez votre image dans le dossier  /images
     2. Copiez un bloc { ... } dans le tableau "gallery" ci-dessous
     3. Remplissez :  src (chemin), title (titre), cat (catégorie),
                      desc (légende affichée au survol / visionneuse)
     Catégories disponibles : "services" · "ia" · "cristaux" · "branding"
     (ajoutez une nouvelle catégorie dans "categories" + "labels" si besoin)

   Le hero utilise  /images/hero-abidjan.jpg
   Le logo utilise  /images/logo.png
   ═══════════════════════════════════════════════════════════════ */

window.CYBERCLIK = {

  brand: {
    name: "CyberClik",
    tagline: "L'Agence Digitale N°1 en Côte d'Ivoire",
    slogan: "Votre succès commence en ligne",
    waNumber: "2250767441771",
    waDisplay: "07 67 44 17 71",
    phones: [
      { display: "05 95 82 57 31", tel: "+2250595825731" },
      { display: "07 13 64 40 62", tel: "+2250713644062" }
    ]
  },

  categories: ["tous", "services", "ia", "cristaux"],

  labels: {
    tous: "Tous",
    services: "Services",
    ia: "IA & Futur",
    cristaux: "Cristaux & Luxe",
    branding: "Branding"
  },

  /* ── GALERIE ────────────────────────────────────────────────
     "tall": true  →  l'affiche occupe 2 rangées (grille rythmée)  */
  gallery: [

    {
      src: "images/poster-site-vitrine.png",
      title: "Site Web Vitrine Premium",
      cat: "services",
      desc: "Des sites web 100% responsive, performants et optimisés SEO. Votre activité en ligne, comme elle le mérite — du Plateau jusqu'au monde.",
      tall: false
    },
    {
      src: "images/poster-video-ia.png",
      title: "Vidéo IA — Nouvelle Génération",
      cat: "services",
      desc: "Publicité marketing nouvelle génération : plans Impact, Influence & Domination, ultra réalistes 4K, livraison en 72h.",
      tall: true
    },
    {
      src: "images/poster-visibilite-locale.png",
      title: "Création d'Adresse & Visibilité Locale",
      cat: "services",
      desc: "Fiche Google Business vérifiée, horaires, photos, avis clients, Apple Plans : soyez trouvé(e) partout, par tous, en un seul clic.",
      tall: false
    },
    {
      src: "images/poster-boost-commerce.png",
      title: "Boostez Votre Commerce",
      cat: "services",
      desc: "L'offre digitale complète : sites web premium, vidéos IA, infographies, affiches et visibilité sur la carte. Partout en Côte d'Ivoire, on vous rend visible.",
      tall: false
    },
    {
      src: "images/poster-hologramme-mains.png",
      title: "Main & Hologramme d'Or",
      cat: "ia",
      desc: "La main humaine rencontre le hologramme doré : l'essence même d'une création CyberClik, où l'IA s'humane.",
      tall: false
    },
    {
      src: "images/poster-rubis.png",
      title: "Rubis Cybernétique",
      cat: "cristaux",
      desc: "Un rubis taillé au laser, enserré dans des circuits d'or. La puissance brute du luxe cybernétique.",
      tall: false
    },
    {
      src: "images/poster-or-premium.png",
      title: "Spirale Or Premium+",
      cat: "cristaux",
      desc: "Double hélice d'or pur : l'énergie du succès, mise en mouvement. Noir perle, or premium+, lumière.",
      tall: false
    },
    {
      src: "images/poster-orange-ivoirien.png",
      title: "Énergie Orange Ivoirienne",
      cat: "ia",
      desc: "L'orange ivoirienne en flux continu : la pulsation d'un pays qui avance, porté par la digitale.",
      tall: false
    },
    {
      src: "images/poster-afrique-verte.png",
      title: "Afrique Connectée",
      cat: "ia",
      desc: "Carte data verte du continent : réseaux, nœuds, flux — et la Côte d'Ivoire en pleine lumière, épinglée au centre.",
      tall: false
    },
    {
      src: "images/poster-interface-ia.png",
      title: "Interface IA Immersive",
      cat: "ia",
      desc: "Tableau de bord futuriste en verre sombre et or : la précision des outils que nous déployons pour vos données.",
      tall: false
    },
    {
      src: "images/poster-diamant.png",
      title: "Diamant Blanc Diamant",
      cat: "cristaux",
      desc: "Le blanc diamant, éclatant sur le noir perle : la clarté et la pureté d'un rendu premium++.",
      tall: true
    },
    {
      src: "images/poster-ecran-courbe.png",
      title: "Cinéma Écran Courbe",
      cat: "ia",
      desc: "L'immersion totale : vos messages projetés sur les plus grands écrans, avec la précision du cinéma.",
      tall: false
    },
    {
      src: "images/poster-androide.png",
      title: "Androide Premium",
      cat: "ia",
      desc: "Le gardien silencieux de votre image digitale. Circuit d'or, regard orange, conception Abidjan, ambition mondiale.",
      tall: false
    }

    /* ✏️ AJOUTEZ VOS PROCHAINES AFFICHES ICI (objectif : 25 total) */
  ]
};

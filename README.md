# ⚡ CYBERCLIK — Site vitrine premium 6 étoiles

> **L'Agence Digitale N°1 en Côte d'Ivoire** — Votre succès commence en ligne.

Site vitrine statique (HTML · CSS · JS, zéro dépendance, zéro build),
style **Cybernétique IA**, livré avec 13 affiches Ultra HD, logo officiel,
carte interactive d'Abidjan et intégration complète des réseaux sociaux.

## 📦 Contenu de l'archive

```
├── index.html          → Structure complète du site (SEO intégré)
├── styles.css          → Design system premium (palette ivoirienne)
├── script.js           → Moteur immersif (13 systèmes interactifs)
├── content/
│   ├── content.js      → ★ TOUTE la galerie + légendes (modifiable)
│   └── README.md       → Guide de modification du contenu
├── images/
│   ├── logo.png                    → Logo officiel fourni
│   ├── hero-abidjan.jpg            → Fond hero cinématique généré IA
│   └── poster-*.png (×13)          → Affiches IA Ultra HD
├── GUIDE-MISE-EN-LIGNE.md          → Pas à pas de publication
└── README.md                       → Ce fichier
```

## 🎨 Choix de direction artistique appliqués

### Palette (exigée)
| Rôle | Couleur | Hex |
|---|---|---|
| Noir perle (fond) | ⬛ | `#000000` |
| Or premium+ (luxe) | 🟨 | `#FFD700` |
| Orange ivoirien (énergie) | 🟧 | `#FF6F00` |
| Blanc diamant (texte) | ⬜ | `#FFFFFF` |
| Vert profond (croissance) | 🟩 | `#009739` |

### Typographie
- **Montserrat** (400→900) — corps, titres, interface : modernité technologique.
- **Playfair Display** (italique) — accents de prestige (« succès », chiffres,
  bandeau défilant) : élégance 6 étoiles.
- Fallbacks système si les polices web ne chargent pas (mode hors-ligne).

### Animations & immersion
1. **Préloader** cinématique (logo + barre or/orange).
2. **Slogan animé** « Votre succès commence en ligne » — décodage cybernétique
   (scramble) + mot *succès* en dégradé or **néon pulsant** (Playfair italic).
3. **Particules** dorées/orange/vert en canvas dans le hero (pause hors-écran).
4. **Parallaxe** : fond hero (zoom lent), contenu hero, affiches de la galerie
   (translation au scroll, amplitude par carte).
5. **Tilt 3D** des 5 cartes services + halo radial qui suit la souris.
6. **Hover premium** : reflet balayé sur les boutons or, zoom + overlay sur
   les affiches, élévation néon sur les cartes réseaux (couleurs officielles
   TikTok / Facebook / Instagram / WhatsApp).
7. **Lightbox** immersive : navigation clavier (←/→/Échap), swipe tactile,
   compteur, légende, zoom plein écran.
8. **Compteurs** animés (80+ projets, 98%, 72h, 7j/7).
9. **Curseur personnalisé** or + halo élastique (desktop, respect de
   `prefers-reduced-motion` et des écrans tactiles).
10. **Bandeau marquee** or défilant des 5 services.
11. **Carte interactive d'Abidjan** : 11 communes survolables (tooltip),
    panneau de détail au clic, zoom molette/boutons, déplacement par glisser,
    marqueur siège pulsant sur le Plateau, lien Google Maps.
12. **Formulaire** avec labels flottants, validation en direct, écran de succès
    animé et **relais WhatsApp** avec message pré-rempli.
13. **FAB WhatsApp** dernière génération : double anneau pulsant, infobulle
    « Disponible maintenant », message pré-rempli.

### SEO & accessibilité
- Balises `<title>`, meta description, Open Graph, favicon, `lang="fr"`.
- HTML sémantique, `aria-label`, navigation clavier, focus visibles,
  `prefers-reduced-motion` respecté, images avec `alt`.

## ▶️ Lancer le site en local
Aucune installation requise. Deux façons :
- **Double-cliquer** sur `index.html` (le site fonctionne hors-ligne).
- Ou serveur local : `python3 -m http.server 8080` puis ouvrir
  `http://localhost:8080`.

## 🔒 Note sur le quota d'affiches
La session IA de génération a produit **10 images** (1 hero + 9 affiches) en
plus de vos **4 affiches fournies** → **13 affiches Ultra HD** livrées.
Le site est prêt pour **25+** : la galerie, les filtres et les légendes sont
100% pilotés par `content/content.js` (voir `content/README.md`).

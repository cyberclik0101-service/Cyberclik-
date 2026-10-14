# 📁 content/ — Votre contenu, entre vos mains

Ce dossier contient **tout ce qui est modifiable sans toucher au code** du site.

## `content.js` — le cerveau du contenu

| Ce qu'il contient | Comment le modifier |
|---|---|
| **La galerie** (25+ affiches) | Tableau `gallery` : chaque bloc `{ src, title, cat, desc, tall }` = une affiche |
| **Les filtres** de la galerie | Tableaux `categories` + `labels` |
| **Coordonnées** (WhatsApp, téléphones) | Objet `brand` |

### ➕ Ajouter une affiche en 30 secondes
1. Déposez l'image (PNG ou JPG) dans le dossier **`/images`**.
2. Ajoutez un bloc dans `gallery` :
   ```js
   {
     src: "images/monde-nouvelle-affiche.png",   // ← chemin de l'image
     title: "Mon titre d'affiche",               // ← titre (survol + visionneuse)
     cat: "ia",                                  // ← "services" | "ia" | "cristaux" | "branding"
     desc: "La légende complète de l'affiche.",  // ← texte sous l'image
     tall: true                                  // ← true = affiche pleine hauteur (rythme)
   }
   ```
3. Rechargez la page. C'est tout — filtres, visionneuse, parallaxe se mettent à jour seuls.

### 🖼️ Atteindre 25 affiches
La livraison inclut **13 affiches Ultra HD** (quota de génération IA de la session).
Pour compléter jusqu'à 25 : générez vos affiches (n'importe quel outil IA) en
**format portrait 2:3** (~1024×1536 min.), déposez-les dans `/images`, puis ajoutez
les blocs ci-dessus. Astuce CyberClik : la palette à respecter est
**noir perle #000 · or #FFD700 · orange #FF6F00 · blanc #FFF · vert #009739**.

## 💡 Astuces
- Le **hero** (fond d'accueil) = `images/hero-abidjan.jpg` (panoramique 16:9).
- Le **logo** = `images/logo.png` (utilisé dans le menu, le footer et le préloader).
- Les **liens sociaux**, les **numéros** et les **CTA WhatsApp** sont dans
  `index.html` — recherchez `wa.me/2250767441771`, `tiktok.com`, etc.
- Les **chiffres des statistiques** (80+, 98%…) sont dans `index.html`,
  attributs `data-target` des balises `.counter`.

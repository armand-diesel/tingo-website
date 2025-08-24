# 🌐 Site Web Tingo - Système Automatique de Sonnerie Scolaire

Site vitrine et landing page pour **Tingo**, le système automatique de sonnerie scolaire moderne et fiable.

Site web professionnel et moderne présentant **Tingo**, un système intelligent de gestion des sonneries scolaires basé sur ESP32. Le site est conçu comme une **landing page + site vitrine** pour présenter le produit, ses fonctionnalités et permettre aux établissements éducatifs de demander un devis.

## ✨ Fonctionnalités du Site

### 🎯 **Structure Principale (Landing Page)**
- **Hero Section** : Nom "Tingo" + slogan impactant + mockup du dispositif
- **Description** : Présentation claire du produit et de ses avantages
- **Fonctionnalités** : 4 points clés du système avec numérotation
- **Avantages Écoles** : Bénéfices concrets (économies, gain de temps, efficacité, satisfaction)
- **Écoles Partenaires** ⭐ **NOUVEAU !** : Section "Ils Utilisent Tingo" avec 2 établissements togolais équipés
- **Témoignages Clients** : Cas d'usage réels avec évaluations 5 étoiles
- **Contact/Devis** : Formulaire de demande de devis personnalisé
- **Documentation** : Espace technique avec guides téléchargeables

Site vitrine + landing page présentant :
- **Nom & slogan** de Tingo
- **Description du produit** et ses fonctionnalités clés
- **Avantages pour les écoles** et établissements éducatifs
- **Témoignages** et cas d'utilisation
- **Formulaire de contact** pour demandes de devis
- **Espace documentation** pour guides techniques

## 🛠️ **Technologies utilisées**

- **HTML5** - Structure sémantique
- **CSS3** - Styles personnalisés avec variables CSS
- **Bootstrap 5** - Framework CSS responsive
- **JavaScript ES6+** - Interactivité et animations
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographie Poppins
- **Google Analytics 4** - Suivi des visiteurs et conversions

## 🎨 **Design et identité visuelle**

### **Palette de couleurs**
- **Couleur primaire** : `#000000` (Noir)
- **Couleur secondaire** : `#2ecc71` (Vert émeraude)
- **Couleurs d'accent** : Définies dans `styles.css`

### **Typographie**
- **Police principale** : Poppins (Google Fonts)
- **Variantes** : 300, 400, 500, 600, 700
- **Hiérarchie** : Utilisation cohérente des classes Bootstrap

### **Logo et identité**
- **Logo principal** : `tingo.png` - Intégré dans la navbar et le footer
- **Taille navbar** : 40px de hauteur
- **Taille footer** : 30px de hauteur
- **Format** : PNG avec transparence
- **Favicon** : `favicon.ico` - Icône de l'onglet du navigateur

### **Palette de couleurs appliquée**
- **Footer** : Fond vert (`bg-success`) avec votre palette Tingo
- **Section "Qu'est-ce que Tingo"** : Icônes en blanc sur fond vert circulaire
- **Section "Pourquoi Choisir Tingo"** : Effets hover en vert au lieu du noir
- **Section Documentation** : Icônes vertes et boutons avec contours verts
- **Bouton formulaire** : Noir avec effet hover vert
- **Cohérence visuelle** : Utilisation de `var(--tingo-secondary)` partout

### **Effets hover avancés** ✨
- **Icônes d'avantages** : Changement de couleur en vert au survol
- **Animation des icônes** : Scale + ombre verte + effet de brillance
- **Transitions fluides** : 0.3s ease sur tous les éléments interactifs
- **Effet de profondeur** : Ombres et transformations au survol

## 📁 **Structure des fichiers**

```
tingo-website/
├── index.html          # Page principale
├── assets/             # Ressources du site
│   ├── css/            # Styles personnalisés
│   │   └── styles.css  # CSS principal
│   ├── js/             # JavaScript
│   │   └── script.js   # JS principal
│   └── img/            # Images et logos
│       ├── tingo.png   # Logo Tingo
│       ├── logo.png    # Logo alternatif
│       └── favicon.ico # Favicon du site
├── README.md           # Documentation du projet
├── netlify.toml        # Configuration Netlify
└── LICENSE             # Licence GNU GPL
```

## 🚀 **Déploiement**

### **Palette de Couleurs Tingo**
- **Primaire** : #000000 (Noir) - Élégance et professionnalisme
- **Secondaire** : #2ecc71 (Vert émeraude) - Innovation et croissance
- **Success** : #27ae60 (Vert foncé) - Validation et succès
- **Info** : #3498db (Bleu) - Information et confiance
- **Dark** : #000000 (Noir) - Texte principal et contraste
- **Light** : #f8f9fa (Gris clair) - Arrière-plans et espacement

### **Configuration requise**
- **Build command** : Aucune (site statique)
- **Publish directory** : `.` (racine)
- **Node version** : 18+ (définie dans `netlify.toml`)

### **Responsive Design**
- **Mobile First** : Approche mobile-first de Bootstrap
- **Breakpoints** : Bootstrap 5 (576px, 768px, 992px, 1200px, 1400px)
- **Flexibilité** : Grid Bootstrap et Flexbox adaptatifs

## 🚀 Installation et Déploiement

### **Déploiement Local**
1. Clonez le repository
2. Ouvrez `index.html` dans votre navigateur
3. Ou utilisez un serveur local (Live Server VS Code)

### **Déploiement Web**
1. **Netlify** : Glissez-déposez le dossier (configuration incluse)
2. **GitHub Pages** : Push vers une branche gh-pages
3. **Vercel** : Import depuis GitHub
4. **Serveur classique** : Upload via FTP

### **Configuration Recommandée**
```bash
# Serveur local avec Python
python -m http.server 8000

# Serveur local avec Node.js
npx serve .

# Serveur local avec PHP
php -S localhost:8000
```

- **Mobile-first** avec Bootstrap 5
- **Breakpoints** : xs, sm, md, lg, xl, xxl
- **Navigation** : Menu hamburger sur mobile
- **Images** : Optimisées et responsives

## 🚀 **Performance**

### **Optimisations implémentées**
- **Lazy loading** des images
- **Préchargement** des polices et CSS
- **Compression** gzip (Netlify)
- **Cache** optimisé pour les ressources statiques

### **Métriques cibles**
- **Lighthouse Score** : 90+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s

## 🔒 **Sécurité**

### **Headers de sécurité**
- **X-Frame-Options** : DENY
- **X-XSS-Protection** : 1; mode=block
- **X-Content-Type-Options** : nosniff
- **Referrer-Policy** : strict-origin-when-cross-origin

### **Bonnes pratiques**
- **HTTPS** obligatoire
- **Validation** des formulaires côté client et serveur
- **Sanitisation** des données utilisateur

## 📈 **SEO et visibilité**

### **Métadonnées**
- **Title** optimisé pour chaque section
- **Meta description** descriptive
- **Open Graph** pour les réseaux sociaux
- **Schema.org** pour la compréhension par les moteurs de recherche

### **Structure**
- **Navigation** claire et logique
- **URLs** sémantiques avec ancres
- **Sitemap** automatique (Netlify)

## 🧪 **Tests et qualité**

### **Tests recommandés**
- **Cross-browser** : Chrome, Firefox, Safari, Edge
- **Mobile** : iOS Safari, Chrome Mobile
- **Accessibilité** : Navigation clavier, lecteurs d'écran
- **Performance** : Lighthouse, PageSpeed Insights

### **Outils de test**
- **Lighthouse** - Audit complet
- **W3C Validator** - Validation HTML/CSS
- **Browser DevTools** - Debug et performance

## 🔄 **Maintenance**

### **Mises à jour régulières**
- **Bootstrap** : Versions LTS
- **Font Awesome** : Dernières icônes
- **Google Fonts** : Optimisations de performance
- **Analytics** : Nouvelles fonctionnalités GA4

### **Intégrations Recommandées**
- **Google Analytics** : Suivi des visiteurs
- **Google Search Console** : Performance SEO
- **Hotjar** : Analyse du comportement utilisateur
- **Uptime Robot** : Surveillance de disponibilité

## 📄 **Licence**

Ce projet est sous licence **GNU General Public License v3.0** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

### **Améliorations Techniques**
- **PWA** : Application web progressive
- **Service Worker** : Mise en cache offline
- **Web Components** : Composants réutilisables
- **TypeScript** : Typage statique
- **Build Tools** : Webpack/Vite pour production

## 🤝 Contribution

### **Comment Contribuer**
1. **Fork** le repository
2. **Créez** une branche pour votre fonctionnalité
3. **Commitez** vos changements
4. **Poussez** vers la branche
5. **Ouvrez** une Pull Request

### **Standards de Code**
- **HTML** : Sémantique et accessible avec Bootstrap
- **CSS** : Variables CSS et classes utilitaires
- **JavaScript** : ES6+ avec commentaires
- **Git** : Messages de commit clairs

## 📞 Support et Contact

### **Questions Techniques**
- **Issues GitHub** : Pour les bugs et demandes
- **Discussions** : Pour les questions générales
- **Wiki** : Documentation détaillée

### **Contact Projet**
- **Email** : contact@tingo-project.com
- **Site** : [www.tingo-project.com](https://www.tingo-project.com)
- **GitHub** : [github.com/tingo-project](https://github.com/tingo-project)

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Bootstrap** pour le framework CSS
- **Font Awesome** pour les icônes
- **Google Fonts** pour la typographie
- **Netlify** pour l'hébergement et le déploiement

---

**Tingo** - Simplifiez la gestion du temps scolaire ! 🚨⏰

# 🚨 Tingo - Site Web Marketing

Site vitrine et landing page pour **Tingo**, le système d'alarme automatique scolaire moderne et fiable.

## 🌐 **Informations du site**

- **URL principale** : [tingo.tech](https://tingo.tech)
- **Email de contact** : [info@tingo.tech](mailto:info@tingo.tech)
- **Produit** : Système d'Alarme Automatique Scolaire

## 🎯 **Objectif du site**

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

## 📁 **Structure des fichiers**

```
tingo-website/
├── index.html          # Page principale
├── styles.css          # Styles personnalisés
├── script.js           # JavaScript et interactions
├── README.md           # Documentation du projet
├── netlify.toml        # Configuration Netlify
└── LICENSE             # Licence GNU GPL
```

## 🚀 **Déploiement**

### **Netlify (Recommandé)**
1. Connectez votre repository GitHub
2. Configurez le domaine personnalisé : `tingo.tech`
3. Déployez automatiquement à chaque push

### **Configuration requise**
- **Build command** : Aucune (site statique)
- **Publish directory** : `.` (racine)
- **Node version** : 18+ (définie dans `netlify.toml`)

## 📊 **Analytics et suivi**

### **Google Analytics 4**
- **ID de mesure** : `G-01HBG1JP26`
- **Tracking automatique** des pages vues
- **Événements personnalisés** pour les conversions
- **Suivi des formulaires** de contact
- **Navigation interne** et téléchargements

### **Événements trackés**
- `page_view` - Visites de pages
- `form_submit` - Soumissions de formulaire
- `navigation_click` - Clics sur la navigation
- `download` - Demandes de documentation

## 🔧 **Personnalisation**

### **Modifier les couleurs**
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --tingo-primary: #000000;
    --tingo-secondary: #2ecc71;
    /* ... autres couleurs ... */
}
```

### **Ajouter du contenu**
- **Nouvelles sections** : Ajoutez dans `index.html`
- **Styles** : Définissez dans `styles.css`
- **Interactions** : Implémentez dans `script.js`

## 📱 **Responsive Design**

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

### **Monitoring**
- **Uptime** : Netlify Status
- **Performance** : Google Analytics
- **Erreurs** : Console JavaScript
- **SEO** : Google Search Console

## 📞 **Support et contact**

- **Email technique** : [info@tingo.tech](mailto:info@tingo.tech)
- **Site web** : [tingo.tech](https://tingo.tech)
- **Documentation** : Disponible sur le site

## 📄 **Licence**

Ce projet est sous licence **GNU General Public License v3.0** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 **Contribution**

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le repository
2. **Créez** une branche pour votre fonctionnalité
3. **Commitez** vos changements
4. **Poussez** vers la branche
5. **Ouvrez** une Pull Request

## 🎉 **Remerciements**

- **Bootstrap** pour le framework CSS
- **Font Awesome** pour les icônes
- **Google Fonts** pour la typographie
- **Netlify** pour l'hébergement et le déploiement

---

**Tingo** - Simplifiez la gestion du temps scolaire ! 🚨⏰

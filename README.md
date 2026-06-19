# 🏛️ Congrès CFTC Paris UD 75 — 26 juin 2026

Site officiel du congrès de l'Union Départementale CFTC de Paris.

## 📁 Structure du projet

```
cftc-paris-ud75/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Styles
├── js/
│   └── main.js         ← Scripts (countdown, form, animations)
├── documents/          ← Déposer les PDF ici
│   ├── congres-convocation.pdf
│   ├── congres-RI.pdf
│   ├── statuts-actuels.pdf
│   ├── projet-statuts.pdf
│   ├── rapport-activite.pdf
│   ├── rapport-financier.pdf
│   ├── motion-orientation.pdf
│   └── inscription-congres.docx
└── README.md
```

## 🚀 Déploiement sur GitHub Pages

1. Créer un repo GitHub (ex : `congres-ud75-2026`)
2. Pousser tous les fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial commit — site congrès UD75 2026"
   git remote add origin https://github.com/TON_USER/congres-ud75-2026.git
   git push -u origin main
   ```
3. Aller dans **Settings → Pages → Source → main branch → / (root)**
4. Le site sera disponible à : `https://TON_USER.github.io/congres-ud75-2026/`

## 📄 Ajouter les vrais documents PDF

Placer les fichiers PDF officiels dans le dossier `documents/` en respectant les noms ci-dessus. Le site les proposera automatiquement en téléchargement.

## 📧 Formulaire de contact

Le formulaire est actuellement en mode démonstration (confirmation visuelle).  
Pour l'activer réellement, connecter un service comme **Formspree** :
1. S'inscrire sur [formspree.io](https://formspree.io)
2. Dans `index.html`, remplacer `<form id="contact-form">` par :
   ```html
   <form id="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

## 🛠️ Personnalisation rapide

- **Couleurs** : modifier les variables CSS dans `css/style.css` (`:root { ... }`)
- **Adresse** : rechercher "26 rue Francis Combe" dans `index.html`
- **Email** : rechercher "congresud75@cftc.fr"
- **Date** : le compte à rebours pointe automatiquement sur le 26/06/2026

---
*Site réalisé pour la CFTC Paris UD 75 — 2026*

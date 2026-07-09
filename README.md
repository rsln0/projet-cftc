# 🏛️ Congrès CFTC Paris UD 75 — 23 mars 2027

Site officiel du congrès de l'Union Départementale CFTC de Paris.

## 📁 Structure du projet

```
projet-cftc/
├── index.html          ← Page principale
├── logo_cftc.svg       ← Logo officiel CFTC
├── UD-75-blanc.svg     ← Logo UD 75 version blanche
├── documents/          ← Dossier pour les PDF
│   └── (à remplir avec les documents)
└── README.md
```

## 🚀 Déploiement sur GitHub Pages

1. Les paramètres GitHub Pages sont déjà configurés
2. Le site est accessible à : https://rsln0.github.io/projet-cftc/

## 📄 Ajouter les documents PDF

Placer les fichiers PDF officiels dans le dossier `documents/` :
- Convocation du congrès
- Rapports d'activité
- Projets de statuts
- Motions et résolutions
- Formulaires d'inscription

Le site les proposera automatiquement en téléchargement.

## 📧 Formulaire de contact

Le formulaire est actuellement en mode démonstration (confirmation visuelle).  
Pour l'activer réellement, connecter un service comme **Formspree** :
1. S'inscrire sur [formspree.io](https://formspree.io)
2. Dans `index.html`, remplacer `<form id="contact-form">` par :
   ```html
   <form id="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

## 🛠️ Personnalisation rapide

- **Couleurs** : modifier les variables CSS dans `index.html` (section `:root { ... }`)
- **Adresse** : rechercher dans `index.html`
- **Email** : rechercher "congresud75@cftc.fr"
- **Date** : le compte à rebours pointe sur le 23/03/2027

---
*Site réalisé pour la CFTC Paris UD 75 — 2027*

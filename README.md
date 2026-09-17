# Compagnon D&D 5e — Universel

Version générique du compagnon de personnage, basée par défaut sur les progressions D&D 5e 2014 (avec Artificier) et conçue pour conserver la disposition de l'application Karu tout en rendant le personnage entièrement configurable.

## Fonctions principales

- Jusqu'à 2 classes parmi : Artificier, Barbare, Barde, Clerc, Druide, Guerrier, Moine, Paladin, Rôdeur, Roublard, Ensorceleur, Occultiste et Magicien.
- Niveau total limité à 20 et bonus de maîtrise recalculé automatiquement.
- Aptitudes de classe affichées automatiquement selon le niveau de chaque classe, avec leurs détails.
- Ressources de classe calculées automatiquement : rage, inspiration, ki, sorcellerie, forme sauvage, Sursaut, Imposition des mains, Conduit divin, etc.
- Multiclassage magique : emplacements standards calculés selon la progression complète/demi-lanceur/artificier, plus Magie de pacte séparée.
- Attaques entièrement configurables : caractéristique, maîtrise, formule de dégâts, bonus, type, portée et économie d'action.
- Sorts entièrement configurables : attaque de sort ou sauvegarde, caractéristique, DD, dégâts, modificateur, réussite à moitié/aucun/complet, ajustements individuels et consommation d'emplacement.
- Calculs automatiques des compétences, expertises, sauvegardes, initiative, CA, DD de sorts et bonus d'attaque.
- Prise en compte de plusieurs aptitudes dans les calculs : Touche-à-tout, Talent fiable, Âme de diamant, Esprit fuyant, Aura de protection, Instinct sauvage, Attaques supplémentaires.
- Les variantes 2024, sous-classes et règles maison ne sont pas imposées : elles peuvent être ajoutées comme aptitudes/ressources personnalisées.
- Ressources et aptitudes personnalisées ajoutables pour sous-classes, dons, objets ou règles maison.
- Inventaire, bourse, notes, états, PV, PV temporaires, repos et suivi de tour.
- Sauvegarde locale automatique, export/import JSON et fonctionnement hors ligne via PWA.

## Déploiement GitHub Pages

Déposer le contenu de ce dossier à la racine du dépôt, puis activer GitHub Pages sur la branche voulue. Aucun build n'est nécessaire.

## Fichiers structurants

- `index.html` : coque de l'application.
- `app.js` : interface, sauvegarde locale et moteur de calcul.
- `class-data.js` : classes, aptitudes, progressions et ressources automatiques.
- `styles.css` : présentation.
- `sw.js` : cache hors ligne.

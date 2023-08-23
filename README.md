
#  Projet Site Web de Viennoiseries en Ligne
![Viennoiserie](https://github.com/ventustyl/site-react-boulangerie/blob/main/src/img/pack%20viennoiserie.png?raw=true)
Ce projet est un site web développé en utilisant React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives. Le site présente une sélection de viennoiseries en ligne, avec une mise en page moderne et des fonctionnalités de navigation fluides.

## Structure du Projet

Le projet est structuré en plusieurs fichiers et dossiers, chacun jouant un rôle spécifique dans la création du site web.

-   **`App.js`** : Ce fichier définit la structure globale de l'application. Il importe les différents composants nécessaires et les place dans l'ordre approprié pour créer la page web finale. Il utilise également le `BrowserRouter` de React Router pour gérer la navigation entre les différentes pages du site.
    
-   **`Navbar.js`** : Ce composant gère la barre de navigation en haut du site. Il contient le logo du site et un icône de menu, qui peut être cliqué pour afficher le menu sur les appareils plus petits. Le style de la barre de navigation est défini en utilisant `styled-components`.
    
-   **`NavbarElements.js`** : Ce fichier contient les composants stylisés qui définissent l'apparence de la barre de navigation. Il utilise des styles CSS personnalisés pour positionner les éléments de manière cohérente et créer un look moderne et épuré.
    
-   **`GlobalStyle.js`** : Ce fichier définit les styles globaux pour l'ensemble de l'application. Il peut contenir des modifications de style qui s'appliquent à l'ensemble du site.
    
-   **`Hero.js`** : Ce composant représente la section d'introduction du site, affichant une image attrayante et un message accrocheur pour attirer l'attention des visiteurs.
    
-   **`Products.js`** : Ce composant affiche une liste de produits, qui sont importés à partir des fichiers `data.js`. Il utilise des composants réutilisables pour afficher les détails de chaque produit.
    
-   **`Feature.js`** : Cette section met en avant une fonctionnalité spéciale du site, comme un appel à l'action ou une promotion. Elle peut être utilisée pour encourager les utilisateurs à explorer davantage le site.
    
-   **`Footer.js`** : Le composant de pied de page contient des informations supplémentaires sur le site, des liens vers les médias sociaux et d'autres informations utiles.
    

### Installation et Exécution

Pour exécuter le projet en local, suivez ces étapes :

1.  Clonez ce dépôt sur votre machine locale.
2.  Naviguez jusqu'au répertoire du projet dans votre terminal.
3.  Exécutez `npm install` pour installer les dépendances.
4.  Exécutez `npm start` pour lancer l'application en mode développement.
5.  Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir le site en action.

### Dépendances Principales

-   React
-   React Router Dom
-   Styled Components
-   React Icons

### Auteur

Ce projet a été développé par Venturino Eric et est disponible sous la licence MIT.

Pour toute question ou retour, n'hésitez pas à me contacter à [venturino83@gmail.com](mailto:[venturino83@gmail.com)

Dernière mise à jour : 08/2022

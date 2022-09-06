import product1 from '../../img/croissant.png';
import product2 from '../../img/Pain-au-chocolat.png';
import product3 from '../../img/tresse.png';
import sweet1 from '../../img/pack viennoiserie.png';
import sweet2 from '../../img/palmier.png';
import sweet3 from '../../img/pain-aux-raisins.png';

export const productData = [
  {
    img: product1,
    alt: 'Croissant',
    name: 'Croissant pur beurre',
    desc: 'Farine, beurre, eau, sucre',

    price: '1.00 €',
    button: 'Ajouter au panier'
  },
  {
    img: product2,
    alt: 'Pain au chocolat',
    name: 'Pain au chocolat 80% cacao',
    desc:
      ' Farine, beurre, eau, sucre, chocolat',
    price: '1.10 €',
    button: 'Ajouter au panier'
  },
  {
    img: product3,
    alt: 'Tresse',
    name: 'Tresse pétri à la main',
    desc:
      'Farine, beurre, eau, sucre',
    price: '1.20 €',
    button: 'Ajouter au panier'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Palmier',
    name: 'Palmier x3',
    desc:
      'Palmier feuilleté artisanal',
    price: '5.00 €',
    button: 'Ajouter au panier'
  },
  {
    img: sweet3,
    alt: 'Pain aux raisins',
    name: 'Pain aux raisins x2',
    desc:
      'Raisins de la région',
    price: '4.00 €',
    button: 'Ajouter au panier'
  },
  {
    img: sweet1,
    alt: 'Pack viennoisserie',
    name: 'Pack viennoisserie',
    desc:
      'Tresse, Palmier, Croissant, Kouglof, ....',
    price: '20.00 €',
    button: 'Ajouter au panier'
  }
];
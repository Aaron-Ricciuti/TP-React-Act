import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cajonde12Container from './components/Cajonde12Container.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cajonde15Container from './components/Cajonde15Container.jsx';
import Cajondoblede10Container from './components/Cajondoblede10Container.jsx';
import Rackera6x9Container from './components/Rackera6x9Container.jsx';

const products = [
  {
   title: 'Cajón acústico personalizado para subwoofer de 12" pesados de más de 700 rms',
   price: '$61.990',
   description: [
        'Excelente calidad de productos y terminaciones. Hechos en MDF de 18mm, no en aglomerado !!!',
        'Clavados, encolados y atornillados.',
        'Forrados en cuerina negra con detalles en alfombra gris.',
   ],
   additionalInfo: {
       dimensions: ['73cm de largo', '38cm de alto', '38cm de profundidad'],
       additional: 'Adicional bornera $1000',
   },
   socialLinks: [
       { url: 'https://api.whatsapp.com/send?text=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-whatsapp' },
       { url: 'https://www.facebook.com/sharer/sharer.php?u=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-facebook' },
       { url: 'https://twitter.com/intent/tweet?url=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-x-twitter' },
       { url: 'mailto:?subject=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-envelope' },
   ],
  },
];

const products1 = [
  {
   title: 'Cajon acústico slot para subwoofer de 15" + de 1200 rms',
   price: '$61.990',
   description: [
       'Excelente calidad de productos y terminaciones. Hechos en MDF de 18mm, no en aglomerado !!!',
        'Clavados, encolados y atornillados.',
        'Forrados en cuerina negra con detalles en alfombra gris.',
   ],
   additionalInfo: {
       dimensions: ['78cm de largo', '42cm de alto', '36cm de profundidad'],
       additional: 'Adicional bornera $1000',
   },
   socialLinks: [
       { url: 'https://api.whatsapp.com/send?text=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-whatsapp' },
       { url: 'https://www.facebook.com/sharer/sharer.php?u=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-facebook' },
       { url: 'https://twitter.com/intent/tweet?url=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-x-twitter' },
       { url: 'mailto:?subject=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-envelope' },
   ],
  },
];

const products2 = [
  {
   title: 'Cajón acústico doble para subwoofers de 10" con tubos de sintonía',
   price: '$48.990',
   description: [
       'Excelente calidad de productos y terminaciones. Hechos en MDF de 18mm, no en aglomerado !!!',
        'Clavados, encolados y atornillados.',
        'Forrados en cuerina negra con detalles en alfombra gris.',
   ],
   additionalInfo: {
       dimensions: ['78cm de largo', '34cm de alto', '30cm de profundidad'],
       additional: 'Adicional bornera $1000',
   },
   socialLinks: [
       { url: 'https://api.whatsapp.com/send?text=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-whatsapp' },
       { url: 'https://www.facebook.com/sharer/sharer.php?u=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-facebook' },
       { url: 'https://twitter.com/intent/tweet?url=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-x-twitter' },
       { url: 'mailto:?subject=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-envelope' },
   ],
  },
];

const products3 = [
  {
   title: 'Rackera para parlantes 6x9 y drivers cortos o medios de 6"',
   price: '$25.990',
   description: [
       'Excelente calidad de productos y terminaciones. Hechos en MDF de 15mm, no en aglomerado !!!',
        'Clavados, encolados y atornillados.',
        'Forrados en cuerina negra con detalles en alfombra gris.',
   ],
   additionalInfo: {
       dimensions: ['87cm de largo', '22cm de alto y 16cm atrás', '36cm de profundidad'],
       additional: 'Adicional bornera $1000',
   },
   socialLinks: [
       { url: 'https://api.whatsapp.com/send?text=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-whatsapp' },
       { url: 'https://www.facebook.com/sharer/sharer.php?u=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-facebook' },
       { url: 'https://twitter.com/intent/tweet?url=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-x-twitter' },
       { url: 'mailto:?subject=https://aaron-ricciuti.github.io/Cajones-Acusticos-BR/html/cajonde12.html', icon: 'fa-envelope' },
   ],
  },
];

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Cajonde12",
    element: <Cajonde12Container products={products} />,
  }, 
  {
    path:"/Cajonde15",
    element: <Cajonde15Container products1={products1} />,
  }, 
  {
    path:"/Cajondoblede10",
    element: <Cajondoblede10Container products2={products2} />,
  }, 
  {
    path:"/Rackera6x9",
    element: <Rackera6x9Container products3={products3} />,
  }, 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cajonde12Container from './components/Cajonde12Container.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
   title: 'Cajón acústico personalizado para subwoofer de 12" pesados de más de 700 rms',
   price: '$61.990',
   description: [
       'Excelente calidad de productos y terminaciones. Hechos en MDF de 18 MM, no en aglomerado !!!',
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

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Cajonde12",
    element: <Cajonde12Container products={products} />,
  }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

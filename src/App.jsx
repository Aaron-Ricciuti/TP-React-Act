import React from 'react';
import "../public/css/routeStyle.css"
import Header from './components/layout/Header';
import CardContainer from './components/CardContainer';
import GalleryContainer from './components/GalleryContainer';
import FollowContainer from './components/FollowContainer';
import Footer from './components/layout/Footer';
import Grid from './components/Grid';
import AboutUsContainer from './components/AboutUsContainer';
import ContactContainer from './components/ContactContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import Cajonde12Container from './components/Cajonde12Container';

function App()  {
  const navLinks = [
    { label: 'Inicio', href: '#start' },
    { label: 'Productos', href: '#product' },
    { label: 'Sobre nosotros', href: '#about-us' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Comentarios', href: '#Comentario' },
  ];

  const handleSearch = (term) => {
    console.log('Buscando:', term);                                       
    // Lógica para manejar la búsqueda
  };

    const titles = {
      rack: "RACKERAS",
      audio: "AUDIO",
      cajones: "CAJONES",
    };

  const cards = [
    {
      image: "../public/img/cajon.png",
      imageAlt: "Cajon",
      title: 'Cajon de 15"',
      description: [
       "Slot 90lt personalizado",
       "78cm de largo",
       "42cm de alto",
       "36cm de profundidad",
      ],
      buttonTitle: "Más información",
      
    },

    {
      image: "../public/img/cajon12_2.jpg",
      imageAlt: "Cajon",
      title: 'Cajon de 12"',
      description:[" Slot 90lt personalizado",
       "65cm de largo", 
       "38cm de alto",
       "34cm de profundidad",],
      buttonTitle: "Más información",
    },

    {
      image: "../public/img/rackera6x9.jpg",
      imageAlt: "Rackera",
      title: "rackera 6x9",
      description:[ "Para drivers cortos o medios de 6",
       "85cm de largo",
       "22cm de alto",
       "24cm de profundidad",],
      buttonTitle: "Más información",
    },

    {
      image: "../public/img/cajondoble10.jpg",
      imageAlt: "Cajon",
      title: 'Cajon doble de 10"',
      description: ["Con tubos de sintonía",
      " 78cm de largo",
       "34cm de alto",
       "30cm de profundidad",],
      buttonTitle: "Más información",
    },
  ];

  const gallery = [
    "../public/img/cajon15sellado.jpg",
    "../public/img/rackera.jpeg",
    "../public/img/cajonslim12.jpg",
    "../public/img/medio6ds18.jpeg",
    "../public/img/cajasindiv.jpeg",
    "../public/img/cajondoble12.jpg",
    "../public/img/cajondoble15_1.jpg",
    "../public/img/rackera6x9.jpg",
  ];

  const aboutUs = [ 
    {
    title: "Sobre nosotros ",
    description: "Somos una empresa con 10 años de trayectoria dedicada a la fabricación de cajones especializados para audiocar y la venta de equipos de audio. Nos distinguimos por la calidad y estética que brindamos.La venta directa que tenemos con los clientes nos proporciona el tiempo necesario para estar atentos al más mínimo detalle de los productos y lograr como compromiso la satisfacción que deseamos en nuestros clientes.",
    image: "../public/img/local.jpeg",
    imageAlt: "Local"
    }
  ];

  const contact = [
    {
    image: "../public/img/local_2.jpeg", 
    title: "Contactanos", 
    text: {
      name: "Nombre:",
      email: "Email:",
      phone: "Teléfono:",
    },
    message: "Mensaje:", 
    selector: "Selecciona una opción: ", 
    option: "Tipo de auto", 
    optionItem: {
       three: "3 puertas",
       four: "4 puertas",
       five: "5 puertas",
    }, 
    question: "¿Cómo quieres que te contactemos?", 
    textEmail: "Email", 
    textPhone: "Teléfono", 
    send: "Enviar", 
    reset:"Borrar",
    }
  ];

 const socials = [
   { 
    link: "https://www.facebook.com/braian.ricciuti/?locale=es_LA",
    icon: "fa-brands fa-facebook fa-lg",
   },
   {
    link: "https://www.instagram.com/cajonesacusticosbr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: "fa-brands fa-instagram fa-lg",
   },
  ];

  const products = [
    {
     title: 'Cajón acústico personalizado para subwoofer de 12" pesados de más de 700 rms',
     price: '$61.990',
     description: [
         'Excelente calidad de productos y terminaciones.',
         'Hechos en MDF de 18 MM.',
         'Clavados, encolados y atornillados.',
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              title="Cajones Acústicos BR"
              navLinks={navLinks}
              whatsappLink="https://wa.me/c/5491162718055"
              searchPlaceholder="Buscar productos..."
              onSearch={handleSearch}
            />
            <Grid titles={titles} />
            <CardContainer cards={cards} />
            <GalleryContainer images={gallery} title={"Productos"} />
            <AboutUsContainer aboutUs={aboutUs} />
            <ContactContainer contacts={contact} />
            <FollowContainer socials={socials} title={"Seguinos en"} />
            <Footer />
          </>
        }
      />
      <Route 
      path="/Cajonde12" 
      element={ 
        <Cajonde12Container products={products} />    
      } 
      />
    </Routes>
  );
};

export default App;

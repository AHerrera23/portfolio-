// Fuente unica de datos del portfolio.
// Para agregar un proyecto: copia un objeto, cambia los datos y sube las imagenes.
// Los campos rol, problema, proceso y resultado son opcionales: si no existen, no se muestran.
const PROYECTOS = [
  {
    id: "jamm",
    titulo: "Jamm",
    resumen: "Diseños personalizados orientados a remeras.",
    stack: ["Photoshop", "Illustrator"],
    portada: "images/jamm/corvette.png",
    portadaAlt: "Remera Corvette, diseño de Jamm",
    // rol: "",
    // problema: "",
    // proceso: "",
    // resultado: "",
    galeria: [
      { src: "images/jamm/corvette.png", alt: "Remera Corvette, diseño de Jamm" },
      { src: "images/jamm/ferrari.png", alt: "Remera Ferrari Lewis Hamilton, diseño de Jamm" },
      { src: "images/jamm/ford.png", alt: "Remera Ford F-100, diseño de Jamm" },
      { src: "images/jamm/palermo.png", alt: "Remera Palermo, diseño de Jamm" },
      { src: "images/jamm/sailor-moon.png", alt: "Remera Sailor Moon, diseño de Jamm" },
    ],
    links: [{ texto: "Ver en Instagram", url: "https://www.instagram.com/estampasjamm/" }],
  },
];

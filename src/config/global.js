export default {
  global: {
    componenteFormativo: 'Producción de editoriales y tipografía',
    descripcionCurso:
      'La tipografía está al servicio de la humanidad, es fiel amiga en la imprenta, la litografía y en el maravilloso mundo de las bellas artes. Es un recurso indispensable en los medios digitales, así como un recurso recurrente en la vida diaria de los medios impresos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Composición y armado de productos editoriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Producción de libro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Producción de revista',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Producción de periódico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Producción de catálogo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Producción de plegable',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Producción de cartilla',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Producción de infografía',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios tipográficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción: definición e historia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación y características tipográficas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Anatomía del tipo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estilos tipográficos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Criterios compositivos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño tipográfico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aula Formativa. (2020). Pasos para lograr una mejor jerarquía tipográfica.',
      link:
        'https://blog.aulaformativa.com/pasos-lograr-mejor-jerarquia-tipografica/',
    },
    {
      referencia: 'Ecdidis Estudio. (2021). ¿Qué es el diseño editorial?.',
      link: 'https://ecdisis.com/que-es-el-diseno-editorial/',
    },
    {
      referencia:
        'Es Desing Escuela Superior de Diseño de Barcelona. (2021).  ¿Qué es la ilustración vectorial y cómo aplicarla en creaciones gráficas?.',
      link:
        'https://www.esdesignbarcelona.com/actualidad/ilustracion/que-es-la-ilustracion-vectorial-y-como-aplicarla-en-creaciones-graficas',
    },
    {
      referencia: 'Dia. Solutions. (2018). El sistema de medidas tipográficas.',
      link:
        'http://dia.solutions/2018/08/21/el-sistema-de-medidas-tipograficas/',
    },
    {
      referencia:
        'DG58 Magazine de Diseño. (2018). Principios tipográficos esenciales para diseñadores. ',
      link:
        'https://dg58magazine.wordpress.com/2018/02/04/principios-tipograficos-esenciales-para-disenadores/',
    },
    {
      referencia: 'Fussel, G. (2019). Breve historia de la tipografía. ',
      link:
        'https://design.tutsplus.com/es/articles/a-brief-history-of-type--cms-30372',
    },
    {
      referencia:
        'Subcutáneo Creative. (2016). Tipografía: introducción a la tipografía. ',
      link:
        'https://www.subcutaneocreative.com/2016/08/introduccion-la-tipografia.html',
    },
    {
      referencia:
        'Universidad de Oriente. (2019) Consideraciones básicas del proceso editorial. ',
      link:
        'https://cancun.uo.edu.mx/content/consideraciones-b%C3%A1sicas-del-proceso-editorial-0',
    },
    {
      referencia: 'Universitat Oberta de Catalunya. (2021). Tipografía.',
      link: 'http://disseny.recursos.uoc.edu/recursos/tipo/es/',
    },
  ],
  glosario: [
    {
      termino: 'Caja baja',
      significado:
        'En tipografía y diseño, tipografías minúsculas, se las denomina así por la posición en que se almacenaban los tipos móviles metálicos de la imprenta tradicional.',
    },
    {
      termino: 'Caja alta',
      significado:
        'En tipografía y diseño, tipografías mayúsculas, se las denomina así por la posición en que antiguamente se guardaban las bandejas o cajas que almacenaban los tipos móviles metálicos de la imprenta tradicional.',
    },
    {
      termino: 'Caja tipográfica',
      significado:
        'Es el sector útil de la grilla, en la que se ubica la zona impresa, limitada por los márgenes.',
    },
    {
      termino: 'Edición',
      significado:
        'Producción impresa de ejemplares de un texto, una obra artística o un documento visual.',
    },
    {
      termino: 'Editorial',
      significado:
        'Artículo no firmado que expresa la opinión de un medio de comunicación sobre un determinado asunto.',
    },
    {
      termino: 'Imprenta',
      significado:
        'Refiere a un mecanismo capaz de reproducir textos e imágenes en un soporte de papel, de tela o de otros materiales, con el fin de producirlos a gran escala. ',
    },
    {
      termino: 'Legibilidad',
      significado:
        'Se usa para medir el nivel de claridad con el que puede leerse un texto gracias a la correcta aplicación de estilos y pautas de composición tipográfica. (Elementos visoespaciales del texto).',
    },
    {
      termino: 'Letra',
      significado:
        'Cada uno de los signos gráficos que componen el alfabeto de un idioma.',
    },
    {
      termino: 'Portada',
      significado:
        'Primera plana de los libros impresos, en que figuran el título del libro, el nombre del autor, el lugar y el año de la impresión.',
    },
    {
      termino: 'Trazo',
      significado:
        'Es una línea o raya. El término se utiliza para nombrar a las rectas y curvas que forman un carácter o que se escriben a mano sin levantar el instrumento de escritura (lápiz, birome, etc.) de la superficie.',
    },
  ],
  complementario: [
    {
      texto: 'Nombre del material',
      tipo: 'tipo',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Nombre del material',
      tipo: 'tipo',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

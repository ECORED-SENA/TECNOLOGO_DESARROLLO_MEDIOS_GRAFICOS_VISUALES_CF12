<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Composición y armado de productos editoriales
    
    figure.mb-4
      img(src='@/assets/curso/tema1/img_intrt1.png', alt='intro tema1')
    
    span.bgrh3.text-black.position-relative ¿Qué es la composición?                
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')

    p.mt-4.mb-4 La composición es una expresión utilizada en la pintura, el diseño, la escultura y la fotografía y, 
      span.bgrspan se emplea para crear el uso equilibrado de los diferentes elementos gráficos 
      | que se encuentran en un espacio de trabajo visual, de esta forma se podrá dar un mensaje de forma clara a un público objetivo.
    
    .cajon.color-secundario.p-5.mb-4
      p La composición en el área de las artes visuales logra satisfacer algunas necesidades prácticas y estéticas, es la manera en la que se comunica y se ordenan los diferentes elementos conceptuales, técnicos y visuales con los que un creador (diseñador, ilustrador, escritor, entre otros) necesita para la creación de una estructura visual en el diseño de piezas gráficas impresas, conformadas por la estructura compositiva y la planeación.
      sapn La composición comprende la relación y las diferentes elecciones entre tamaños, coleres, texturas, alineamientos, pesos.
    
    p.text-center.mb-4(style="font-weight:bold;") Al momento de diseñar una composición es importante tener en cuenta los siguientes elementos:

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr1.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario
            .p-4
              h2.text-center El texto
              p.text-center Es un conjunto tipográfico determinado, el cual hace parte de toda publicación y se caracteriza por hacer parte de un estilo propio o familia tipográfica, es importante mencionar que cada uno de los diferentes estilos tipográficos se encarga de expresar conceptos definidos. (se debe tener en cuenta que los textos tipográficos dentro de una composición deben ser legibles y claros para el lector).


      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr2.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario
            .p-4
              h2.text-center Las imágenes
              p.text-center Hacen referencia a un número de objetos determinados y su distribución espacial en la cual es presentado teniendo en cuenta su escala y tamaño representados por el color y forma esto permite expresar lo que se desea mostrar en un texto para así darle fuerza.


      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario
            .p-4
              h2.text-center Las márgenes y cuadrícula

              p.text-center Son una parte fundamental a la hora de crear una composición ya que dependiendo de su ubicación y proporción dependerá la posición de los textos e imágenes en un arte gráfico final.

      
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario
            .p-4
              h2.text-center El formato

              p.text-center Dependerá de la necesidad de un cliente objetivo, es decir que tamaño se puede utilizar, que tipo de papel y cuál será su posición (vertical – horizontal) optimizando al máximo su uso, si se tiene como referencia un pliego este permitirá más información con un porcentaje menor de páginas y una mejor distribución de cada pieza gráfica, o por el contrario un pliego pequeño tendrá menos información y más cantidad de páginas.

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr5.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario
            .p-4
              h2.text-center Espacios en blanco

              p.text-center Cabe resaltar que cada publicación cuenta con espacios vacíos, los cuales permiten generar una impresión de alivio, de calma, de tranquilidad, a la vista de un espectador, no se trata de saturar un espacio visual grafico de textos e imágenes para mostrar un contenido, siempre debe ser equilibrado, para que este sea agradable a la vista.


      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario
            .p-4
              h2.text-center El contexto o concepto

              p.text-center Se debe determinar a qué público está orientado el diseño, esto es lo más importante dentro de una composición editorial, de su desarrollo dependerá que una publicación cumpla las expectativas de un público determinado, puesto que cada mercado tiene distintas características.


      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr7.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario
            .p-4
              h2.text-center Color

              p.text-center Se establece con un concepto claro por parte de los creadores y su público, la gama de colores estará presente detrás de cada edición. 

      
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img.contenavatar(src='@/assets/curso/tema1/tr8.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario
            .p-4
              h2.text-center Equilibrio y armonía

              p.text-center Antes de hacer la entrega del producto es importante verificar que esta contiene una sinergia en su totalidad dando un mensaje claro dentro de un contexto determinado, aquí se debe ser autocrítico y realizar los ajustes necesarios con el fin de hacer de un entregable un contenido atractivo al público.
    
    span.bgrh3.text-black.position-relative El diseño editorial                 
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')
    
    div.mb-5
      p.mt-4 Forma parte del diseño gráfico, es decir, es una rama de esta profesión. En el caso editorial, este se encarga de la 
        span.bgrspan producción y diagramación de cualquier tipo de pieza literaria.  
        | Pueden ser libros, revistas, manuales, diarios, fanzines, folletos informativos, entre otros. Normalmente este tipo de piezas o documentos están compuestos por muchos pliegos o páginas y cuentan con diseños de composición y tipografías que son realizados de manera más regular que en otro tipo de diseños.

    .tarjeta.bgrspan.p-3.mb-5.position-relative.pt-2
        .row.justify-content-between.align-items-center
          .col-md-3.col-sm-3.text-center
            img.hijoacct(src="@/assets/curso/tema1/img-actio1.svg" style="display:inline;margin-top:-45px;")
          .col-sm-5.col-md-5.mb-3.mb-sm-0
            h3.mb-1 Características del diseño editorial
            p.text-small A continuación, observe el video Conceptos básicos diseño editorial para tener una mayor contextualización de este tema, sus elementos, características, entre otros.  
          .col-md-3.col-sm-3
            a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=jYcip58qPsk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA" target="_blank")
              span Ver video
              i.fas.fa-play

    p La función principal del diseño editorial es la de maquetación y al momento de desarrollar una pieza gráfica, que esta pueda pasar por las diferentes etapas de ajustes, correcciones de diseño y su entorno, con el fin de llegar al resultado esperado; el diseño editorial cuenta con tres características principales: el texto, imágenes y retícula, diferenciados así:

    figure.mb-4
      .row  
        .col-md-3
        .col-md-6
          img(src='@/assets/curso/tema1/img_infog.svg', alt='intro tema1')
    
    br
    p.text-center.mb-3.mt-5(style="font-weight:bold;") De igual forma, cuenta con tres componentes básicos: el target, la tipografía y los recursos económicos, representados así:

    .row.mb-5.brgflyp
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.p-4.contenflip
        .tarjeta.tarjeta-flip.flip1.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="display:flex;flex-wrap:wrap;")
              img.brgflyp2.pt-5(src='@/assets/curso/tema1/imf_flyp1.svg', alt='intro tema1')
              h3.p-4.text-center.text-black El target

            .tarjeta-flip__contenido.p-2.p-xl-4
              h3.text-center.w-100 El target
              p Se debe realizar un análisis del mercado cuantitativo y cualitativo, definiendo el consumidor final (o potencial), para ello es importante conocer el tipo de lector (sus intereses y gustos) al cual estará dirigido el diseño editorial.
 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.p-4.contenflip
        .tarjeta.tarjeta-flip.flip1.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="display:flex;flex-wrap:wrap;")
              img.brgflyp2.pt-5(src='@/assets/curso/tema1/imf_flyp2.svg', alt='intro tema1')
              h3.p-4.text-center.text-black.w-100 La tipografía
            .tarjeta-flip__contenido.p-2.p-xl-4
              h3.text-center La tipografía
              p Esta debe ser afín al público objetivo, coherente a un estilo o marca, importante que sea tendencia, novedosa y fresca a simple vista, el éxito del diseño editorial dependerá en gran parte del tipo de tipografía a utilizar, por ello es indispensable escoger correctamente fuentes y tamaños.


      .col-sm-6.col-xl-4.mb-4.mb-xl-0.p-4.contenflip
        .tarjeta.tarjeta-flip.flip1.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="display:flex;flex-wrap:wrap;")
              img.brgflyp2.pt-5(src='@/assets/curso/tema1/imf_flyp3.svg', alt='intro tema1')
              h3.p-4.text-center.text-black.w-100 Los recursos económicos

            .tarjeta-flip__contenido.p-2.p-xl-4
              h3.text-center Los recursos económicos
              p Es necesario contar con un presupuesto adecuado para la creación del diseño editorial, si se cuenta con un buen presupuesto posiblemente tendrá un buen producto, el esperado, cabe resaltar que no se requiere tener un presupuesto robusto para la creación de un diseño óptimo, sin embargo, en el caso de que se cuente con un presupuesto mínimo, no limitará a que sea un resultado negativo o sea un mal diseño.
 
    p.mb-5 El diseño editorial se encarga primordialmente de la estética y del aspecto que tendrán los diferentes conjuntos de textos e imágenes al momento de ser expuestos ante un público, ocupándose de que su exterior e interior cumplan detalladamente con el pedido específico, siendo un soporte de todo el contenido del diseño, apoyando la interpretación de la lectura dentro de una publicación.

    span.bgrh3.text-black.position-relative Elementos de un diseño editorial                
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')

    p.mt-4(data-aos="fade-up") El diseño editorial cuenta con algunos elementos que al momento de su creación y planeación se deben tener presentes, estos son:
    
    PasosA.color-acento-contenido.mb-5.mt-5(tipo="l")
      .row
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso1.svg', alt='paso 1')
          
        .col-md-10.aling-content-center
          h3 Elegir el formato
          p Cuál es la estructura que se adecua mejor a la publicación, cuál es el formato con el que se puede y se adapta para realizar el trabajo.
        
      .row
        .col-md-10
          h3 Materiales
          p Son todos los materiales y recursos físicos planeados para la publicación al momento de ser diseñada, entre ellos están, tipos de papel y sus diversos calibres, cartón y su gama diversa, cartulinas entre otros, dichos materiales hacen parte de la creación y diseño de tapas, paginas, divisiones, del componente externo del diseño editorial.
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso2.svg', alt='paso 2')

      .row
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso3.svg', alt='paso 3')
        .col-md-10
          h3 Imágenes (tratamiento pertinente)
          p Para el creador del diseño es muy importante el poder transmitir un contenido a través de imágenes, por ello al momento de escogerlas y darles el tratamiento adecuado dentro de la publicación sean coherentes con los textos y los colores, tamaños y calidad de cada una de las imágenes a utilizar.
      
      .row
        .col-md-10
          h3 Marcos de las páginas, bordes y sangrías
          p Con el fin de darle a una publicación un nivel profesional, al momento de empezar el diseño ya deben estar definidos que tipo de marcos de página a utilizar, esto a gusto del diseñador y el contexto requerido, el tipo de tamaño del borde de acuerdo con las páginas, y la sangría que se aplicara al diseño editorial.
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso4.svg', alt='paso 4')
      
      .row
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso5.svg', alt='paso 5')
        .col-md-10
          h3 Caja tipográfica
          p Es la forma de darle un límite a la parte especifica donde se ubica el contenido de la publicación, no es más que un borde virtual, comúnmente conocida como margen determinada por cuatro lados para cada página: inferior, superior, lateral derecho y lateral izquierdo, cabe recordar que los tamaños de márgenes son priorizados desde la fase inicial de diseño.
 
      
      .row
        .col-md-10
          h3 Retícula editorial
          p Es el instrumento que se maneja para acomodar el contenido de la publicación de modo organizado de acuerdo con el diseño, se puede decir que son unas líneas imaginarias dentro de las cuales se podrá bocetar dentro de la publicación. 
        .col-md-2
          figure
          img.contenpaso(src='@/assets/curso/tema1/img-paso6.svg', alt='paso 6')
      
    .bgrconten.mb-5
      div.p-5
        p.text-center Se recomienda que al momento de crear un proyecto editorial se utilice el programa de diseño Adobe InDesign, ya que es el #[em software] con las mejores características de diseño de páginas, medios escritos y digitales.
        figure
          img.contenbgr(src='@/assets/curso/tema1/img-conte.svg', alt='paso 6')

    Separador

    #t_1_1.titulo-segundo.color-secundario.mb-5
      h2 1.1	Producción de libro
    
    .row.mb-5
      .col-md-7
        p Conjunto de muchas hojas de papel u otro material semejante que, encuadernadas, forman un volumen, obra científica, literaria o de cualquier otra índole con extensión suficiente para formar volumen, que puede aparecer impresa o en otro soporte. 
        p En esta área de aprendizaje se hablará de cuáles son los procesos editoriales que conllevan la realización de un libro desde su 
          span.bgrspan etapa de creación hasta su proceso de distribución, 
          |  y que pasará por una serie de etapas editoriales que son importantes tener en cuenta, diferenciadas así:
        ul.lista-ul.p-3
          li
            ul
              li 
                i.fas.fa-angle-right
                | Presentación: (texto original) es la etapa inicial donde los autores muestran explícitamente la propuesta editorial completa, de igual forma, se deben seguir algunos pasos dentro de la presentación.
              li 
                i.fas.fa-angle-right
                | Debe contar con un alto nivel de argumentación.
              li 
                i.fas.fa-angle-right
                | Debe contar con la revisión editorial de los contenidos.
              li 
                i.fas.fa-angle-right
                | Debe estar bajo los parámetros de legalidad y aspectos administrativos requeridos para la publicación.
                  
      .col-md-5
        figure
          img.conten1-1(src='@/assets/curso/tema1/img-1-1.png', alt='imagen 1.1')
    
    .tarjeta.brgflyp.p-4.mb-5
      SlyderA
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Macroedición
            p En esta etapa del proceso se trabaja con el contenido original que ya fue admitido y cumple con los requisitos técnicos, se realiza una primera lectura, donde el editor y los autores hacen un chequeo de cada una de las características que le dan estructura a la obra, cómo se compone, cómo están organizados los contenidos, qué recursos gráficos se utilizaron.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly1.svg', alt='Slyder 1')
              
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Microedición
            p Después de que la macroedición esté ajustada, el contenido original se envía a la corrección de estilo y ortotipografía, es decir, (se excluyen los errores ortográficos y de puntuación; se supervisan las mayúsculas, minúsculas, comillas, negritas, comillas y el uso de las tildes), cabe resaltar que al momento de realizar dichas correcciones, estas son notificadas a los autores con el fin de ser revisadas y ajustadas en el menor tiempo posible.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly2.svg', alt='Slyder 2')
          
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Revisión de autores
            p En este espacio los autores realizan los ajustes y cambios antes solicitados, los cuales son incorporados de acuerdo con el pedido específico del corrector y editor, con el fin dar continuidad al proceso de producción.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly3.svg', alt='Slyder 3')
          
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Maquetación
            p En esta etapa del proceso el editor con el texto definitivo lo envía al área de diseño, allí se estructura su paginación de acuerdo con el nicho al cual está dirigido y se realizarán pruebas de impresión para detallar el contenido interno de la publicación, con el fin de cerciorarse que no falten detalles dentro del contenido, se tienen en cuenta las retículas, la proporción y la legibilidad.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly4.svg', alt='Slyder 4')
          
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Corrección de pruebas
            p Aquí se hace énfasis en revisar con cautela los textos adecuados a los formatos de páginas, es decir, los espacios, la ubicación de elementos textuales y no textuales, los cortes de palabras los recursos gráficos entre otros, esta corrección de pruebas está a cargo de un corrector de estilo quíen es supervisado por el editor.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly5.svg', alt='Slyder 5')
          
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Diseño y revisión final
            p Para el tema del diseño externo se debe tener en cuenta la cubierta y contracubierta, lomo y solapas, luego de pasar por los procesos anteriores y determinar qué tipo de diseño es el adecuado para la publicación final se pasa de un original a un libro, cabe resaltar que esta labor puede realizarse en paralelo a la maquetación, correcciones de estilo o a la edición del contenido.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly6.svg', alt='Slyder 6')
          
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Producción – Impresión
            p Ya en la etapa de producción el libro es producido en físico y en los diversos formatos digitales, de igual forma, se sube a páginas #[em web] y tiendas en línea.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly7.svg', alt='Slyder 7')
        
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            h2 Difusión y distribución
            p Después de contar con el libro en soporte físico y digital es distribuido a los diferentes canales de comercialización especializados en venta de libros, con el fin de que este sea difundido para poder ser leído, que es el objetivo número uno en un contexto editorial.
      
          .col-md-4
            figure
              img.contenslyd(src='@/assets/curso/tema1/img-sly8.svg', alt='Slyder 8')
    
    .bgrconten.mb-5
      .row
        .col-md-3.p-5
          figure
            img.contenbgr2(src='@/assets/curso/tema1/img-banneinter.svg', alt='Slyder 8')
        .col-md-9.p-5
          p Cabe resaltar las gestiones legales que le competen a un libro son:
          p El #[strong ISBN] (International Standard Book Number) es un sistema internacional de numeración para publicaciones «tipo-libro» certificado por Normas ISO que identifica cada título, impreso y/o digital, de acuerdo con su procedencia (región, país o área idiomática) y número del editor. Está conformado por trece dígitos precedidos por las siglas ISBN.
    
    .row.mb-5
      .col-md-5
        figure
          img.contenbgr3(src='@/assets/curso/tema1/img-12.png', alt='Slyder 8')
      
      .col-md-7
        p ISBN se podrá solicitar cuando se conozca el total de páginas finales del libro, de lo contrario no se puede realizar la gestión de solicitud.
        ul.lista-ul.p-3
          li
            ul
              li 
                i.fas.fa-angle-right
                | Se podrá realizar la solicitud del ISBN posterior a la maquetación del libro ya impreso.
              li 
                i.fas.fa-angle-right
                | El trámite para obtener el código de barras de un libro solo se podrá hacer cuando ya se cuenta con el número ISBN, con el fin de poder comercializarlo.
              li 
                i.fas.fa-angle-right
                | Cuando se cuenta con el ISBN se podrá tramitar y adquirir el número de depósito legal del libro.
              li 
                i.fas.fa-angle-right
                | Para el caso de un libro digital el ISBN podrá solicitarse en cualquier momento, es importante saber cuál es el formato del archivo (EPUB, MOBI, PDF) con el cual se va a comercializar. 
  
    Separador

    #t_1_2.titulo-segundo.color-secundario.mb-5
      h2 1.2	Producción revista
    
    .row
      .col-md-7
        p Es una publicación periódica con textos e imágenes sobre varias materias o sobre una especialmente (RAE, 2021).
        p La revista es una publicación que por lo general se realiza semanal o mensualmente, su objetivo 
          span.bgrspan principal es cautivar a un al lector por medio del entretenimiento;  
          | las revistas cuentan con una clasificación que está determinada de la siguiente forma: revistas informativas, revista de apoyo, revistas científicas, revistas de entretenimiento, revistas de farándula y revistas digitales.
      .col-md-5
        figure
          img.contenbgr3(src='@/assets/curso/tema1/img-13.png', alt='Slyder 8')
    
    span.bgrh3.text-black.position-relative Etapas de producción de una revista                
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')

    AcordionA.mt-5.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Procesamiento de la información")
        .col-md-6.mb-4.mb-md-0.p-5
          p Está determinada por las operaciones de elección, producción y distribución de la información. Esta tarea la desempeña el redactor quien almacena la información necesaria que se necesita para la creación de un contenido, se apoya de ser necesario en bases de datos almacenadas, al mismo tiempo realiza la mayor parte de labores de preparación, se encarga de la redacción de textos.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor1.png', alt='Texto que describa la imagen')
            
      .row(titulo="Control y tratamiento de la información")
        .col-md-6.mb-4.mb-md-0.p-5
          p Teniendo ya la información almacenada el redactor encargado de la sección examina y ajusta todos los contenidos que se encuentran guardados en el sistema, procede a fijar cada página y su sección de igual forma las columnas de interés, por otro lado, la publicidad se va fijando en las páginas que estén destinadas para tal función esto facilitará el proceso de maquetación de la revista a redacción, de esta función se encarga un coordinador de área. 

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor2.png', alt='Texto que describa la imagen')
      
      .row(titulo="Montaje de la página")
        .col-md-6.mb-4.mb-md-0.p-5
          p Para la realización del diseño de la página se debe tener en cuenta que los contenidos estén ajustados, llevando el equilibrio entre ilustraciones y textos, para esta acción se debe contar con un ordenador y sus respectivos #[em software]s de digitalización, los cuales permitan la manipulación de gráficos, fotos y textos.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor3.png', alt='Texto que describa la imagen')
      
      .row(titulo="Desarrollo del soporte de impresión")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este es un mecanismo adecuado que está en medio de la fase de redacción e impresión, para la edición de revistas no es muy útil la técnica tipográfica, ya que sus propiedades de impresión son de gama intermedia, no dando una óptima calidad, por tal razón se recomienda que sea por plancha #[em offset] o cilindro en el hueco grabado.  

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor4.png', alt='Texto que describa la imagen')
      
      .row(titulo="Impresión")
        .col-md-6.mb-4.mb-md-0.p-5
          p Cuenta con un alto grado de automatización, lo cual hace que este sea muy complejo, por lo general se realiza por medio de la impresión rotativa.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor5.png', alt='Texto que describa la imagen')
      
      .row(titulo="Plegado y encuadernado")
        .col-md-6.mb-4.mb-md-0.p-5
          p Esta fase responsabilidad del departamento de distribución y producción, después del proceso de producción el cual es la fase final, se procede a realizar el cortado de páginas, inclusión de material publicitario, los pliegues y finalmente el encuadernado, pegado de etiquetas y embalaje, después de todo este proceso todo el material (ejemplares) se apilan de acuerdo con su destino, se cargan en estibas para facilitar su traslado a los vehículos encargados de su entrega final.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/acor6.png', alt='Texto que describa la imagen')

    h5.text-center.mt-5(data-aos="fade-up") A continuación, se hará referencia a las partes que componen una revista:

    SlyderC.mb-5.mt-4(:datos="datosSlyder")

    Separador
      
    #t_1_3.titulo-segundo.color-secundario.mb-5
      h2 1.3	Producción periódico
    
    .row
      .col-md-5
        figure
          img.conten1-3(src='@/assets/curso/tema1/img-1-3.png', alt='imagen 1-3')
      .col-md-7
        p Es un 
          span.bgrspan medio de comunicación impreso publicado regularmente  
          | que busca dar cuenta de los sucesos más relevantes de la actualidad. 
        p La producción de un periódico se desarrolla por medio de un proceso de gestión editorial, que es el encargado de la redacción y del proceso de impresión, esta acción consta de dos etapas preimpresión e impresión, la preimpresión es la unión de procesos de elaboración de un contenido gráfico hasta que este es impreso.
        .cajon.color-secundario.p-4.mb-4
          p Es importante mencionar que cada periódico cuenta con una dinámica propia de producción, igual que su funcionamiento; sin embargo, existen varias etapas que se relacionan entre sí, cuentan con una dinámica de tiempos acordes al tipo de publicación, la cual puede ser diaria o semanal.
    
    span.bgrh3.text-black.position-relative Etapas de producción de un periódico                
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')
    
    p.mt-5 Dentro del proceso productivo existen áreas encargadas de tareas importantes, con el fin de obtener un buen contenido en todo aspecto, dichas áreas están divididas de la siguiente manera:
    p Consejo de redacción, investigación, redacción, edición, diagramación, impresión, distribución.
    p.mb-5 Estas se diferencian así:

    .row.mb-5
      .col-md-1
      .col-md-10
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Consejo de redacción") La creación de un consejo editorial es la primera etapa para crear un periódico u otro medio impreso. Aquí es donde se reúnen los órganos más importantes del medio, director, redactor jefe, editores de las secciones individuales, comité editorial. La tarea principal del equipo editorial es determinar qué noticias e información se publicarán, qué enfoque se propone de acuerdo con un tema determinado.

          p.text-small(numero="2" titulo="Investigación") En esta etapa de la estructura de un periódico, los periodistas son primordiales, de igual forma que los fotógrafos e ilustradores, en el proceso de investigación su principal herramienta es ubicar las fuentes, las cuales pueden ser directas o indirectas, y donde se recoge la mayor  cantidad posible de  información para escribir noticias, reportajes, crónicas , la actividad principal de los fotógrafos e ilustradores en el escenario investigativo es lograr el material e imágenes que soporten y complementen los textos.

          p.text-small(numero="3" titulo="Redacción") Es el escenario donde todo periodista escribe una noticia, crónica, reportaje, columna, es una etapa de trabajo individual en el que el periódico debe estar provisto de títulos y subtítulos textuales, así como de cada una de sus secciones claramente definidas, dependerá del editor de cada sección la jerarquía asociada con el mensaje o la información.

          p.text-small(numero="4" titulo="Edición") En esta etapa del proceso los editores son los encargados de editar cada sección, ya que son ellos quienes conocen cada tema y pueden corroborar la veracidad de la información, después de esta acción el contenido se le entrega al director general, quien hace una última revisión y aprueba definitivamente los textos, en esta etapa se ajustan y determinan los textos del periódico. Es en esta fase se anexan puntos, tildes, signos de interrogación etc, se elimina información, se corroboran los datos y se estandariza la información sin perder el estilo que todo periodista ha impreso en ella.

          p.text-small(numero="5" titulo="Diagramación") Esta etapa tiende ser compleja, puesto que implica que todo contenido sea fácil de leer, que la estructura del texto sea correcta y proporcionada, que las imágenes sean comprensibles y coherentes con el texto o la información ya que son el apoyo, el responsable de esto es el departamento de diseño. Al crear la maquetación se deben tener en cuenta aspectos como el marco tipográfico, la paginación, el encabezado, el título, el subtítulo, la fuente (letra) y su tamaño, espacios, gráficos, fotos e ilustraciones.

          p.text-small(numero="6" titulo="Caja tipográfica") Este término se utiliza únicamente en el campo de los medios impresos; se refiere al marco de una página que contiene información, títulos e imágenes (semejante a los márgenes de un cuaderno), el marco tipográfico permite definir el espacio disponible y adecuado para un texto, una vez definida la caja tipográfica, es posible determinar la numeración de las páginas, el tamaño de la caja tipográfica varía de acuerdo con la orientación del diseñador y el contenido que se desee mostrar.

          p.text-small(numero="7" titulo="Impresión") En esta etapa se debe tener en cuenta la cantidad de colores con los que se va a producir el periódico “monocromo (un color) y policromía (más de dos colores), dicha información debe ser comunicada claramente a la persona encargada de realizar la impresión con el fin de tener claro qué tipo de máquina utilizar, determinando las tintas, colores y porcentajes requeridos. la impresión es un proceso rápido debido a la prisa asociada con la publicación, ya que se realiza a altas horas de la noche en anticipación a todas las noticias de última hora.

          p.text-small(numero="8" titulo="Distribución") La etapa final y su objetivo principal es hacerlo llegar a todos los públicos, la distribución se puede realizar por; suscripción, en tiendas, librerías, supermercados, entre otros, la publicidad es una parte importante de la distribución, ya que es la manera en la que se da a conocer su existencia.

    Separador

    #t_1_4.titulo-segundo.color-secundario.mb-5
      h2 1.4 Producción catálogo
    
    .row
      .col-md-6
        p Es la 
          span.bgrspan lista ordenada o clasificada que se hará sobre cualquier tipo de objetos  
          | (monedas, bienes a la venta, documentos, entre otros) o en su defecto personas y también el catálogo será aquel conjunto de publicaciones u objetos que se encuentran clasificados normalmente para la venta (definicionabc.com, sf.).
        .cajon.color-secundario.p-4.mb-4
          p El catálogo es una excelente herramienta visual con la cual se pueden promocionar los productos de una marca o empresa, este debe contener las descripciones precisas de cada producto ofertado, de igual forma, debe contar con una calidad óptima de fotografías, un diseño atractivo y llamativo para el usuario, a continuación, se mencionarán las etapas que constituyen el proceso total y su resultado obteniendo una pieza de calidad.
      .col-md-6
        figure
          img.conten1-4(src='@/assets/curso/tema1/img-1-4.png', alt='imagen 1-4')
    
    br
    span.bgrh3.text-black.position-relative Etapas para la realización de un catálogo                
      img.hijotext(src='@/assets/curso/tema1/imgtext.svg', alt='intro tema1')
        
    ImagenInfografica.color-primario.mb-5.brgflyp.mt-5
      template(v-slot:imagen)
        figure.mb-5.mt-2
          img.conten1-4-1.p-5(src='@/assets/curso/tema1/img-info.svg', alt='imagen 1-4')

      .tarjeta.color-acento-botones.p-3(x="23.8%" y="24%" numero="1")
        .h5.mb-2 Briefing 
        p.mt-3 Debe ser claro y explícito en sus contenidos, el planteamiento requiere ser organizado creando el equilibrio entre la parte gráfica y los textos.
      .tarjeta.color-acento-botones.p-3(x="29.8%" y="75%" numero="2")
        .h5.mb-2 Conocer el producto y su entorno  
        p.mt-3 Para que el catálogo cumpla con su objetivo, se debe conocer al detalle lo que se desea comunicar con el fin de hacerlo de mejor forma para un público objetivo.
      .tarjeta.color-acento-botones.p-3(x="36.5%" y="24%" numero="3")
        .h5.mb-2 Análisis de contenido 
        p.mt-3 Los contenidos no deben ser extensos ni con imágenes sobrecargadas, por el contrario, la información debe ser concreta, objetiva y de fácil interpretación para ser transmitida a su cliente final.
      .tarjeta.color-acento-botones.p-3(x="42.8%" y="75%" numero="4")
        .h5.mb-2 Diseño de estructura y formato 
        p.mt-3 Estará determinado por el tipo de información (textos e imágenes) los diseñadores serán los encargados de establecer el número de páginas, el tipo de papel, peso, transparencia, legibilidad, al diseñar catálogos es crucial tener una buena estructura, estilo para el contenido.
      .tarjeta.color-acento-botones.p-3(x="49.5%" y="24%" numero="5")
        .h5.mb-2 Selección tipográfica y de color 
        p.mt-3 Al momento de realizar esta selección es importante tener en cuenta los detalles de las líneas guías, las cuales se deben ajustar de acuerdo con el tipo de proyecto, de igual forma se priorizan las gamas cromáticas facilitando la identidad del producto.
      .tarjeta.color-acento-botones.p-3(x="55.8%" y="75%" numero="6")
        .h5.mb-2 Volcado de contenidos 
        p.mt-3 Al momento de tener claro el estilo, formato y estructura del catálogo, es el momento indicado para incorporar los contenidos, los cuales son analizados por el equipo de diseño con el fin de realizar ajustes, cambios y correcciones.
      .tarjeta.color-acento-botones.p-3(x="62.2%" y="24%" numero="7")
        .h5.mb-2 Gráficos e imágenes 
        p.mt-3 Un catálogo siempre enseña su contenido visualmente con imágenes, infografías, tablas o gráficos, la portada es la cara visible de un catálogo, se podría decir que una parte muy significativa del proceso de diseño de un catálogo es obtener una portada la cual se muestre interesante y represente el contenido del catálogo.
      .tarjeta.color-acento-botones.p-3(x="68.5%" y="75%" numero="8")
        .h5.mb-2 Revisiones con el cliente 
        p.mt-3 Al momento de diseñar y realizar un catálogo es muy importante tener una buena comunicación entre el área de diseño y su cliente con el fin de restar errores y tener rapidez en el momento de poner en marcha la estrategia de creación. 
      .tarjeta.color-acento-botones.p-3(x="74.9%" y="24%" numero="9")
        .h5.mb-2 Cierre de archivos y envío a imprenta 
        p.mt-3 Al momento de recibir el visto bueno por parte del cliente y dar su aprobación del material y su contenido, se hará una revisión final del archivo. Se enviará directamente al área encargada de la preimpresión de archivos PDF para el proceso de imprenta y producción, después de todo este proceso se tendrá el proyecto final de catálogo.

    Separador

    #t_1_5.titulo-segundo.color-secundario.mb-5
      h2 1.5	Producción plegable
    
    .row
      .col-md-6
        figure
          img(src='@/assets/curso/tema1/img-1-3.png', alt='imagen 1-3')
      .col-md-6
        p Un plegable se puede utilizar como carta de presentación para una empresa o para un producto específico, 
          span.bgrspan con este se puede difundir información sobre un tema determinado,  
          | es muy importante tener claro qué tipo de información se quiere proyectar, evitando saturar al público con algún tipo de información que realmente no es necesaria, por esta razón se hace importante conocer los diferentes tipos de pliegues y sus posibles aplicaciones. 
        .cajon.color-secundario.p-4.mb-4
          h3 Tipos de plegables
          p El plegable tiene a cargo dar a conocer un servicio o producto y por qué no, apoyar su venta, por esto es importante que transmita las características de este, así como su calidad y la mayor información que el público pueda necesitar; se pueden diferenciar dependiendo de la cantidad de dobleces que el plegable tenga.
    
    .row.mb-5
      .col-sm-4.col-md-4.col-xl-4.mb-4.mb-xl-0.contenflip
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4
              img.brgflyp3.pt-5(src='@/assets/curso/tema1/flyp1.png', alt='intro tema1')
              h4.p-4.text-center.text-black Plegable a dos cuerpos
            .tarjeta-flip__contenido.p-4.p-xl-5.p-4
              h1 Plegable a dos cuerpos
              p Conocido principalmente como díptico, este tipo de folleto se hace con una sola hoja o folio con un solo pliegue en el medio. permitiéndole tener dos caras, delanteras y dos traseras, estas formas son similares a los libros, por lo que generalmente se usa un diseño similar en estos casos: una portada, dos lados con contenido y un reverso con un mensaje de cierre.

      .col-sm-4.col-md-4.col-xl-4.mb-4.mb-xl-0.contenflip
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4
              img.brgflyp3.pt-5(src='@/assets/curso/tema1/flyp2.png', alt='intro tema1')
              h4.p-4.text-center.text-black Plegable a tres cuerpos
            .tarjeta-flip__contenido.p-4.p-xl-5.p-4
              h1 Plegable a tres cuerpos
              p Se conocen como trípticos, son aquellos que tienen tres pliegues que dan como resultado seis caras, lo que permite presentar bastante información, se podrá realizar de varias formas el pliegue, algunos de ellos son: sobre (las caras están dobladas hacia adentro), acordeón (las caras están dobladas hacia adentro y hacia afuera, dando la idea de un acordeón) y ventana (solo la primera y la última cara están dobladas hacia adentro, dando la forma) de una ventana.

      .col-sm-4.col-md-4.col-xl-4.mb-4.mb-xl-0.contenflip
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4
              img.brgflyp3.pt-5(src='@/assets/curso/tema1/flyp3.png', alt='intro tema1')
              h4.p-4.text-center.text-black Plegable a cuatro cuerpos
            .tarjeta-flip__contenido.p-4.p-xl-5.p-4
              h1 Plegable a cuatro cuerpos
              p También llamado cuadríptico, es uno de los tipos de plegado menos utilizados, ya que necesita cuatro pliegues para tener sus ocho caras. Por tal razón, puede contener más información que un pliegue de tres partes. 

    p La impresión es un factor determinante, por medio de la calidad de la impresión el consumidor final tiene una experiencia de satisfacción a través de los colores que estén presentes. 

    Separador

    #t_1_6.titulo-segundo.color-secundario.mb-5
      h2 1.6 Producción cartilla
    
    .row
      .col-md-7
        p Se puede decir que la cartilla es una 
          span.bgrspan revista corta de un tema determinado,  
          | cuyo propósito es orientar sobre un argumento de interés de un público objetivo.
        p(style="font-weight:bold;") La cartilla tiene tres partes importantes diferenciadas así:
        ul.lista-ul.p-3
          li
            ul
              li 
                p.mb-0 #[i.fas.fa-angle-right(style="color:#26CCDA;")] #[strong.colortext Portada:] debe llevar un título creativo, es importante agregarle imágenes. 
              li 
                p.mb-0 #[i.fas.fa-angle-right(style="color:#26CCDA;")] #[strong.colortext Desarrollo:] se debe dejar la primera página para la presentación, en las páginas siguientes se posicionarán los productos de cada área específica, uno por página o sección, dependiendo la estructura organizativa, por lo general en la última página de la cartilla se recomendaría dejar las conclusiones del argumento de la cartilla.
              li 
                p.mb-0 #[i.fas.fa-angle-right(style="color:#26CCDA;")] #[strong.colortext Contratapa:] de acuerdo con los productos que se publican en la cartilla, se debe escribir una idea o conclusión para que el público tenga de referencia.
        p Se recomendaría tener un texto instructivo para el diseño de la cartilla, el cual podría ser de esta forma:

      .col-md-5
        figure
          img.conten1-3(src='@/assets/curso/tema1/img-1-6.png', alt='imagen 1-6')

    .cajon.color-secundario.p-4.mb-4.mt-3
      p Qué características debe tener la cartilla, cuál es el diseño y organización de la cartilla, elaborar un plan de escritura que servirá de orientación y sentido para la cartilla, cuál es el propósito, cuál es el público objetivo, qué tema tratará, cuáles serán las secciones o páginas que tendrá, qué forma o estructura tendrá. 
      p Partiendo de esta información se podrá empezar a bocetar una versión preliminar de la cartilla.
    
    Separador

    #t_1_7.titulo-segundo.color-secundario.mb-5
      h2 1.7	Producción Infografía
    
    .row
      .col-md-5
        figure
          img.conten1-3(src='@/assets/curso/tema1/img_1-7.png', alt='imagen 1-7')
      .col-md-7
        p Una infografía (o gráfico informativo) es 
          span.bgrspan “la representación visual de información y datos”.  
          | Una infografía es una colección de imágenes, visualizaciones de datos, gráficos de barra y gráficos circulares (o de pastel) y texto simple (minimalista) que resume un tema para que se pueda entender fácilmente (Venngage, s.f.).
        .cajon.color-secundario.p-4.mb-4
          p Las infografías tienen como objetivo principal exponer conceptos complejos utilizando los gráficos como apoyos visuales con los cuales lograr acomodar la información de forma creativa y organizada, podría decirse que es una representación visual para transmitir un mensaje y para organizar los elementos que permiten entender el mensaje en coherencia con una narrativa visual.
    p.text-black.mt-2 Al momento de optimizar el proceso de creación se requiere seguir un planteamiento, el cual está estructurado en fases divididas así:

    AcordionA.mt-5.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Recopilación de la información")
        .col-md-6.mb-4.mb-md-0.p-5
          p Para la recolección de la información se deben tener claras las fuentes de investigación, definiendo ¿qué aspectos se deben representar? y ¿cuál es el mensaje para transmitir?, esto influye para determinar qué elementos actuarán como enlace conductor de acuerdo con la jerarquía de gráficos llevados a un guion.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-1.png', alt='Texto que describa la imagen')
            
      .row(titulo="Determinar los objetivos")
        .col-md-6.mb-4.mb-md-0.p-5
          p Desde la creación de los contenidos se debe tener claro cuál es objetivo para cumplir en su interacción con el público, enfocados en:
            ul.lista-ul.p-3
              li
                ul
                  li 
                    i.fas.fa-angle-right
                    span Si es un material publicitario, informativo o didáctico.
                  li 
                    i.fas.fa-angle-right
                    span Si aportará valor a un tema determinado.
                  li 
                    i.fas.fa-angle-right
                    span Si está en capacidad de solucionar una dificultad real.
                  li 
                    i.fas.fa-angle-right
                    span Si será un instrumento mediador con el cual se podrá persuadir sobre una venta.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-2.png', alt='Texto que describa la imagen')
      
      .row(titulo="Medios y vías de difusión")
        .col-md-6.mb-4.mb-md-0.p-5
          p Esta fase es muy importante, ya que se deben escoger acertadamente los canales de comunicación (medios masivos) donde se propagará el contenido infográfico para llegar a un usuario o público objetivo, de igual forma, se debe considerar un formato en donde se podrán recopilar los elementos que se necesitarán tales como, textos, fotos, ilustraciones, diagramas, iconografías y más.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-3.png', alt='Texto que describa la imagen')
      
      .row(titulo="Soporte y formato")
        .col-md-6.mb-4.mb-md-0.p-5
          p Se debe priorizar el tipo de material que se encargará de unir los diferentes elementos y el formato con sus respectivas dimensiones, ya que por medio de este se visualizara la información, es importante mencionar que el soporte puede ser físico o virtual, esto implicará que se tenga claro el mecanismo adecuado para la difusión.  

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-4.png', alt='Texto que describa la imagen')
      
      .row(titulo="Croquis o bocetos")
        .col-md-6.mb-4.mb-md-0.p-5
          p En el espacio proyectual de la infografía se habla de croquis y planos porque es donde se organizan los elementos para su visualización arquitectónica, por otro lado, el boceto se orienta a escenario artístico, aquí se busca tener el mejor canal de comunicación, el cual optimice la manera de narrar los hechos descritos gráficamente en la infografía.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-5.png', alt='Texto que describa la imagen')
      
      .row(titulo="Diseño de los elementos infográficos")
        .col-md-6.mb-4.mb-md-0.p-5
          p Para el desarrollo de esta etapa es importante contar con el apoyo de #[em software] de diseño y aplicaciones de diseño que utilizarán los actores en las respectivas escenas, los gráficos, textos, ilustraciones, diagramas, fotos e iconografías, son detalladamente elaboradas, con el fin de representar la información en sus lugares correspondientes anteriormente localizados en el espacio adecuado gracias al boceto.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-6.png', alt='Texto que describa la imagen')

      .row(titulo="Presentación y reflexión")
        .col-md-6.mb-4.mb-md-0.p-5
          p En esta etapa la infografía sale a escena, se hace un chequeo final para que no falte detalle alguno, y que la información que se da es percibida de manera clara, fluida y sin interrupciones, con el fin de ayudar su comprensión.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-7.png', alt='Texto que describa la imagen')
      
      .row(titulo="Difusión, seguimiento y medición")
        .col-md-6.mb-4.mb-md-0.p-5
          p Los medios de comunicación anteriormente determinados (medios visuales y difusión) servirán de estandarte para dar circulación al material infográfico, con el fin de obtener óptimos resultados de acuerdo con los lugares de difusión del material, la difusión además podrá ser física o virtual de acuerdo con los medios offline u online que se utilicen para llevarla a cabo.

        .col-md-6
          figure
            img.contenacord(src='@/assets/curso/tema1/img_sly2-8.png', alt='Texto que describa la imagen')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Portada',
        texto:
          'Es la página principal, su principal objetivo está enfocado en vender contenidos, haciendo que un cliente opte por realizar la compra despertando su interés de algún tema en específico.',
        imagen: require('@/assets/curso/tema1/slyd1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Contraportada',
        texto:
          'Es un  breve enunciado que hace énfasis en contenidos relevantes, los cuales están distribuidos en el interior de la edición, se puede decir que es una breve reseña de los contenidos.',
        imagen: require('@/assets/curso/tema1/slyd2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Editorial',
        texto:
          'Es una página en la cual se publica un texto determinado, haciendo alusión al género periodístico de opinión que lo puede caracterizar por medio de un artículo.',
        imagen: require('@/assets/curso/tema1/slyd3.png'),
      },
      {
        titulo: 'Índice',
        texto:
          'Es un listado de indicadores que facilita la ubicación de los contenidos internos de la revista.',
        imagen: require('@/assets/curso/tema1/slyd4.png'),
      },
      {
        titulo: 'Directorio',
        texto:
          'Se encarga de ampliar e identificar los contenidos de la portada, se ubica dentro la estructura interna de la revista.',
        imagen: require('@/assets/curso/tema1/slyd5.png'),
      },
      {
        titulo: 'Artículo',
        texto:
          'Es el eje central de una revista, es importante que este se acompañe de fotografías, imágenes o gráficas, las cuales en su gran mayoría están explicadas por una frase o un breve título que recoge la introducción del contenido principal.',
        imagen: require('@/assets/curso/tema1/slyd6.png'),
      },
      {
        titulo: 'Anuncios publicitarios',
        texto:
          'Hacen referencia a una estrategia comercial (pauta publicitaria), de esta forma hace que económicamente sea sostenible, ya que se puede decir que es un acuerdo de corresponsabilidad entre empresas, comercios, instituciones, organizaciones y la revista, asegurándose de las futuras ediciones de cada publicación.',
        imagen: require('@/assets/curso/tema1/slyd7.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.tarjeta-avatar > img
  transform: translateY(80%) translateX(-50%)
.tarjeta.color-secundario h2, .tarjeta.color-primario h2
  margin-top: 50px
.tarjeta-flip.color-secundario.flip1 .tarjeta-flip__img
  background-color: #ffffff
  box-shadow: 0px 0px 10px rgba(0,0,0,.08)
.tarjeta-flip.color-secundario.flip1 .tarjeta-flip__contenido
  background-color: #366592
  color: #ffffff
.tarjeta-flip__contenido
  display: flex
  flex-direction: column
  place-content: center
.flip1 .tarjeta-flip__contenido *
  color: #ffffff !important
  text-align: center !important
.tarjeta-flip__contenido *
  text-align: center !important
.lista-ul li i.fas.fa-angle-right
  color: #F57C00
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #B1F9FF
  color: #12263F
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #B1F9FF !important
  color: #12263F !important
.linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #1FA4AF
  color: white
  font-weight: bold
.linea-tiempo-d__item__number
  background-color: #1FA4AF
  color: white
  font-weight: bold
.img-infografica__card .tarjeta
  background-color: white
  border: 2px #FFAC57 solid
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #FFDCB9 !important
.cajon.color-secundario
  background-color: #ffd1a2
.cajon.color-secundario:before
  background-color: #FFAC57
.slyder-a__tipo-a .slyder-a__btn--atrs
  left: -22px
.slyder-a__tipo-a .slyder-a__btn--sigt
  right: -22px
</style>

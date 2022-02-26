<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Composición y armado de productos editoriales

        
    //-figure.mb-5
      img.imgbannerintro(src='@/assets/curso/introduccion/img_fondo_intro.png', alt='Fondo introducción')
  
      img.hijofigura1(src='@/assets/curso/introduccion/img_flot1.svg', alt='Fondo introducción')

      img.hijofigura2(src='@/assets/curso/introduccion/img_flot2.svg', alt='Fondo introducción')

      img.hijofigura3(src='@/assets/curso/introduccion/img_flot3.svg', alt='Fondo introducción')

    figure.mb-4
      img(src='@/assets/curso/introduccion/img_fond-comple.svg', alt='Fondo introducción')

    p.text-center.p-3 A continuación, podrá visualizar de qué se tratará este componente formativo:

    
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      
    

    



    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

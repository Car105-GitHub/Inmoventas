<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}

          </v-icon>
          
        </v-btn>
        <a href="https://www.facebook.com" target="_blank" style="margin-right: 15px; color:white">
        <i class="fab fa-facebook fa-2x"></i></a>
       
        <a href="https://www.twitter.com" target="_blank" style="margin-right: 15px; color:DodgerBlue">
        <i class="fab fa-twitter fa-2x"></i></a>
      
        <a href="https://www.linkedin.com" target="_blank" style="margin-right: 15px; color:blue">
        <i class="fab fa-linkedin fa-2x"></i></a>
      
        <a href="https://www.instagram.com" target="_blank" style="margin-right: 15px; color:red">
        <i class="fab fa-instagram fa-2x"></i></a>
        
        <a href="mailto: franksuagar@yahoo.com.co" target="_blank" style="margin-right: 15px; color:black">
        <i class="fas fa-envelope-square fa-2x"></i></a>

      
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Esta empresa se dedica a la comercialización de inmuebles nuevos y usados 
                    prestando orientación  y la mejor opción del mercado para el distrute del
                    mejor hogar para su familia
      </v-card-text>
       
      <v-divider></v-divider>
     
                     
      
      <v-card-text class="white--text">
         <strong>© {{ new Date().getFullYear() }} — Todos los derechos reservados </strong>Inmo Ventas</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  
</template>

<script>
  export default {
    data: () => ({
      icons: [
        /**'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-home',
        'mdi-email',**/
        
        

      ],
    }),
  }
</script>

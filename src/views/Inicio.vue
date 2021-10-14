<template>
  <v-carousel
    cycle
    height="450"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        </v-row>
    </v-carousel-item>
  </v-carousel>
  
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
           src: "https://image.freepik.com/foto-gratis/pequena-casa-privada-bosque-tuddal-gaustatoppen-noruega_181624-20194.jpg",
          },
          {
            src: "https://image.freepik.com/foto-gratis/gente-cafeteria_53876-47028.jpg",
          },
          {
            src: "https://image.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg",
          },
          {
            src: "https://image.freepik.com/foto-gratis/edificio-residencial-ventanas-balcones_140725-7608.jpg",
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

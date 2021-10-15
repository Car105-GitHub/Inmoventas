<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.pinimg.com/originals/7b/72/88/7b72888a136a6ec8870b6858e4cd6b01.jpg',
          },
          {
            src: 'https://i.pinimg.com/236x/f8/d4/89/f8d4891088c248862cdcec31062eafbd.jpg',
          },
          {
            src: 'https://i.pinimg.com/236x/02/6f/75/026f7501e26ce8fdc1d485e55f8fd576.jpg',
          },
          {
            src: 'https://i.pinimg.com/236x/94/94/62/94946237dc15afe454e1e6e4a94b8970.jpg',
          },
        ],
      }
    },
  }
</script>

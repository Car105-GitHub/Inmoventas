<template>
  <v-app>
    
<Barra />
    <v-main>
      <router-view/>
            <Footers />
    </v-main>
  </v-app>
</template>

<script>
import Barra from './components/Barra.vue'
import Footers from './components/Footers.vue'

export default {
  name: 'App',
  components:{
    Barra,
    Footers,
  },

  data: () => ({
    //
  }),
};
</script>

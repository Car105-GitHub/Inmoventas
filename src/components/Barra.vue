<template>
  <v-card >
    <v-app-bar>


      <v-spacer></v-spacer>

          <h1 >Encuentra Tu Inmueble Ideal.</h1>

      <v-spacer></v-spacer>




      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarInicio()">Inicio</v-tab>
          <v-tab @click="llamarTipoInmueble()">Tipos de  Inmuebles</v-tab>
          <v-tab @click="llamarOfertas()">Ofertas de Inmuebles</v-tab>
          <v-tab @click="llamarTabla()">Listado de Inmuebles</v-tab>
          <v-tab @click="llamarRegistro()">Registro Nuevo Inmueble</v-tab>
         


        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="200"
    >
      
    </v-sheet>
  </v-card>
</template>

<script>
export default {
    data() {
        
    },

    methods:{

        llamarRegistro(){

            this.$router.push('/registro')


        },

           llamarTabla(){

            this.$router.push('/tabla')


        },

         llamarInicio(){

            this.$router.push('/inicio')


        },

        llamarOfertas(){

            this.$router.push('/ofertas')


        },

        llamarTipoInmueble(){

            this.$router.push('/tipoinmueble')


        }


    }
}
</script>



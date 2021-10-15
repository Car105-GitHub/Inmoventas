<template>
  <v-container >
    <v-app-bar>


      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarInicio()">Inicio</v-tab>
          <v-tab @click="llamarTipoInmueble()">Tipos de  Inmuebles</v-tab>
          <!-- <v-tab @click="llamarOfertas()">Ofertas de Inmuebles</v-tab> -->
          <v-tab @click="llamarTabla()">Todos Nuestros Inmuebles</v-tab>
          <v-tab @click="llamarRegistro()">Registro Nuevo Inmueble</v-tab>
          <v-tab @click="llamarPrincipal()">Servicios</v-tab>
          <v-tab @click="llamarAdmInicio()">Administración</v-tab>
        </v-tabs>
      </template>

      <v-container xs12 sm3   >
      <img   height="120"  :src="require('@/assets/logoInmoventas3.jpg')" >
      </v-container>




    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="200"
    >
      
    </v-sheet>
  </v-container>
</template>

<script>
export default {
    data() {
        
    },

    methods:{

              llamarAdmInicio(){            
            this.$router.push('/adminicio')
        
    },

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

        llamarPrincipal(){

            this.$router.push('/principal')


        },

        llamarServicios(){

            this.$router.push('/servicios')


        },

        llamarAdministracion(){

            this.$router.push('/administracion')

        },


        llamarTipoInmueble(){

            this.$router.push('/tipoinmueble')


        }


    }
}
</script>



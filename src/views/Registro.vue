<template>
<v-container>
  <v-form @submit.prevent="agregarInmueble()">


    <v-select
      v-model="atributos.tipo"
      :items="tipoO"
      label="Tipo Inmueble"
    ></v-select>
   
   
    <v-select
      v-model="atributos.habitaciones"
      :items="habitacionesO"
      label="Habitaciones"
    ></v-select>
   
   
    <v-text-field
      v-model="atributos.descripcion"
      :counter="100"
      label="Descripción"
    ></v-text-field>

        
    <v-text-field
      v-model="atributos.contacto"
      :counter="100"
      label="Contacto"
    ></v-text-field>

        
    <!-- <v-text-field
      v-model="atributos.foto1"
      :counter="100"
      label="Foto 1"
    ></v-text-field>

            
    <v-text-field
      v-model="atributos.foto2"
      :counter="100"
      label="Foto 2"
    ></v-text-field>

            
    <v-text-field
      v-model="atributos.foto3"
      :counter="100"
      label="Foto 3"
    ></v-text-field> -->

    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      Enviar registro
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="limpiar()"
    >
      Limpiar
    </v-btn>


  </v-form>
  </v-container>
</template>

<script>
export default {

data(){

  return {
    Atributos:[],

    atributos: {

      tipo:"",
      habitaciones:"",
      descripcion:"",
      contacto:"",
      // foto1:"",
      // foto2:"",
      // foto3:"",

    },

    // O de Opciones
    tipoO:['Apto','Casa','Local','Finca'],
    habitacionesO:['1','2','3'],



  }


},

methods:{


  agregarInmueble(){
   console.log(this.atributos);

   
    if(!this.atributos.tipo){

       this.$swal('Error!',
                    'Falta Tipo de Inmueble !',
                    'error');


    }

     else if(!this.atributos.habitaciones){

       this.$swal('Error!',
                    'Falta # de Habitaciones !',
                    'error');




    }

     else if(!this.atributos.contacto){

       this.$swal('Error!',
                    'Faltan datos de Contacto !',
                    'error');


    }

   

    else{

      this.axios
    .post("/nuevo-registro",this.atributos)
    .then((res)=>{
      this.Atributos.push(res.data);


       this.$swal('success!',
                    'Inmueble Agregada exitosamente!',
                    'success');
     
     

      
      
      this.atributos.tipo="";
      this.atributos.habitaciones="";
      this.atributos.descripcion="";
      this.atributos.contacto="";
      // this.atributos.foto1="";
      // this.atributos.foto2="";
      // this.atributos.foto3="";
 
   
    })

    .catch((e)=>{

      console.log(e.response);

      alert("Error en guardar registro");


    })
 

    }

   
    
    

  },



  






}

  
}
</script>
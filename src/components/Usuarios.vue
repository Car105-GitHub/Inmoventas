<template>
<v-container class="container-int">
    <v-form @submit.prevent="agregarUsuario()">
        
        <v-text-field class="textField" v-model="atributos.nombre" label="Nombre" required></v-text-field>

        <v-text-field class="textField" v-model="atributos.apellido" label="Apellido" required></v-text-field>

        <v-text-field class="textField" v-model="atributos.telefono" :counter="10" label="Teléfono" required></v-text-field>

        <v-text-field v-model="atributos.email1" label="E-mail" required></v-text-field>

        <v-text-field v-model="atributos.email2" label="Confirma E-mail" required></v-text-field>

        <v-text-field v-model="atributos.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Mínimo 8 caracteres" counter @click:append="show1 = !show1"></v-text-field>
        
        <v-select v-model="atributos.perfil" :items="perfiles" label="Seleccione el perfil" outlined></v-select>
      
        <v-btn block depressed color="primary" type="submit">
            Guardar
        </v-btn>
    </v-form>
</v-container>
</template>

<script>
export default {
    // name: 'usuarios',
    data() {
        return {
            Atributos: [],
            atributos: {
                nombre: "",
                apellido: "",
                telefono: "",
                email1: "",
                email2: "",
                password: "",
                perfil: "",
                activo: 1                ,
                 
            },
            perfiles: [
                "Oferente de Inmueble",
                "Oferente de Servicios",
                "Comprador de Inmuebles",
                "Comprador de Servicios",
                "Administración de Noticias"
            ],
            show1: false        
        }
        
    },

    methods: {
        agregarUsuario() {
            console.log(this.atributos);
            this.axios
                .post('/usuario/add', this.atributos)
                .then((res) => {
                    this.Atributos.push(res.data);
                    this.atributos.nombre="";
                    this.atributos.apellido="";
                    this.atributos.telefono="";
                    this.atributos.email1="";
                    this.atributos.email2="";
                    this.atributos.password="";
                    this.atributos.perfil=""
                })
                .catch((e) => {
                    console.log(e.response);
                })
        }
    }
}
</script>

<style scoped>
.container-int {
    padding: 20px;
    margin: 20px;
    border: 2px;
    background-color: white;
    border-color: black;
    border-style: solid;
    min-height: 500px;
}
</style>

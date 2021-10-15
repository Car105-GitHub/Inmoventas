<template>
<v-container id="marco" class="container-md">
    <v-form @submit="validaAcceso()">
        <v-container>
            <h1 class="adm-h3">ADMINISTRACIÓN</h1>
        </v-container>
        <v-container class="container-int">
            <!-- <v-text-field class="textField" v-model="nombre" :counter="30" :rules="nameRules" label="Nombre" required></v-text-field>

                <v-text-field class="textField" v-model="apellido" :counter="30" :rules="nameRules" label="Apellido" required></v-text-field> -->

            <v-text-field v-model="atributos.email1" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field v-model="atributos.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Mínimo 8 caracteres" counter @click:append="show1 = !show1"></v-text-field>

            <v-btn block depressed color="primary" type="submit">
                Enviar
            </v-btn>
        </v-container>
    </v-form>
</v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'admInicio',
    data() {
        return {
            Atributos: [],
            atributos: {
                // nombre: "",
                // apellido: "",
                email1: '',
                password: '',

            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            valid: true,
            show1: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
        //mensaje=null;
    },
    methods: {
        validaAcceso() {
            //            
            //this.mensaje = "Validando 0 ...."
            this.$router.push('/admadministrador')
            // console.log({
            //         email1: this.email1,
            //         password: this.password
            //     })
            // axios.post('localhost:3000/api/usuario/login', {
            //         email1: this.email1,
            //         password: this.password
            //     })
            //     .then(response => {
            //         //this.mensaje = "Validando 1 ...."
            //         console.log(response.data)
            //         return response.data
            //     })
            //     .then(data => {
            //         //this.mensaje = "Validando 2 ...."
            //         localStorage.setItem('token', data.tokenReturn)
            //         this.$router.push('/admadministrador')
            //     })
            //     .catch(err => {
            //         this.mensaje = null;
            //         console.log(err.response)
            //         if ([404, 401].includes(err.response.status)) {
            //             this.mensaje = "El correo o la contraseña son incorrectos"
            //         } else {
            //             this.mensaje = "Ocurrió un error interno"
            //         }
            //     })
        }

    },
}
</script>

<style scoped>
.adm-h3 {
    color: royalblue;
}

.container-md {
    padding: 3%;
    margin-top: 25px;
    background: url("../assets/Vira-trabajo_05.jpg") no-repeat center center fixed;
    background-size: cover;
}

.container-int {
    padding: 20px;
    margin: 20px;
    border: 2px;
    background-color: white;
    border-color: black;
    border-style: solid;
}
</style>

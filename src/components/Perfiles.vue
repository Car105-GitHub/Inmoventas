<template>
<v-container class="container-int">
    <v-form @submit.prevent="agregarPerfil()">

        <template>
            <v-container fluid>
                <v-select v-model="atributos.perfil" :items="perfiles" label="Seleccione el perfil" outlined></v-select>
                
                <v-switch v-model="atributos.publicaAvisos" :label="`Publica avisos`"></v-switch>
                <v-switch v-model="atributos.editaAvisos" :label="`Edita avisos`"></v-switch>
                <v-switch v-model="atributos.eliminaAvisos" :label="`Elimina avisos`"></v-switch>
                
                <v-switch v-model="atributos.publicaServicios" :label="`Publica Servicios`"></v-switch>
                <v-switch v-model="atributos.editaServicios" :label="`Edita Servicios`"></v-switch>
                <v-switch v-model="atributos.eliminaServicios" :label="`Elimina Servicios`"></v-switch>

                <v-switch v-model="atributos.contactaVendedores" :label="`Contacta Vendedores`"></v-switch>
                <v-switch v-model="atributos.contactaProfesionales" :label="`Contacta Profesionales`"></v-switch>
                
            </v-container>
        </template>

        <v-btn block depressed color="primary" type="submit">
            Guardar
        </v-btn>
    </v-form>
</v-container>
</template>

<script>
export default {
    name: 'perfiles',
    data() {
        return {
            Atributos: [],
            atributos: {
                perfil: "",
                publicaAvisos: true,
                editaAvisos: true,
                eliminaAvisos: true,
                publicaServicios: true,
                editaServicios: true,
                eliminaServicios: true,
                contactaVendedores: true,
                contactaProfesionales: true
            },
            perfiles: [
                'Oferente de Inmueble',
                'Oferente de Servicios',
                'Comprador de Inmuebles',
                'Comprador de Servicios',
                'Administraciòn de Noticias'
            ]
        }
    },
    methods: {
        agregarPerfil() {
            console.log(this.atributos);
            this.axios
                .post("/perfil/add", this.atributos)
                .then((res) => {
                    this.Atributos.push(res.data);
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

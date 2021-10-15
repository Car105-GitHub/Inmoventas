<template>
<v-container>

    <v-data-table :headers="headers" :items="tablaInmuebles" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>LISTADO DE APARTAMENTOS</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                
            </v-toolbar>
        </template>
      
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>

</v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            // {
            //     text: 'ID  del Inmueble',
            //     value: '_id'
            // },
            {
                text: 'Tipo de Inmueble',
                value: 'tipo'
            },
            {
                text: 'Habitaciones',
                value: 'habitaciones'
            },
            {
                text: 'Descripción',
                value: 'descripcion'
            },
            {
                text: 'Contacto',
                value: 'contacto',
            },
            // {
            //     text: 'Avcciones', value: 'actions', sortable: false
            // },

        ],
        tablaInmuebles: [],
        editedIndex: -1,
        editedItem: [],
        defaultItem: {

        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
        this.listarInmueble();

    },

    methods: {
        initialize() {

        },



 
        // deleteItem(item) {
        //     this.editedIndex = this.tablaInmuebles.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialogDelete = true
        // },

        // deleteItemConfirm() {
        //     this.tablaInmuebles.splice(this.editedIndex, 1)
        //     this.closeDelete()
        // },

        // close() {
        //     this.dialog = false
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem)
        //         this.editedIndex = -1
        //     })
        // },

        // closeDelete() {
        //     this.dialogDelete = false
        //     this.$nextTick(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem)
        //         this.editedIndex = -1
        //     })
        // },

        // save() {
        //     if (this.editedIndex > -1) {
        //         Object.assign(this.tablaInmuebles[this.editedIndex], this.editedItem)

        //     } else {
        //         this.tablaInmuebles.push(this.editedItem)
        //     }
        //     this.close()
        // },



//////////////////////////////////////////////////////////////////////////////


        // listarInmueble() {

        //     this.axios.get('/buscarTodo')
        //         .then((response) => {
        //             this.tablaInmuebles = response.data;
        //         })
        //         .catch((e) => {
        //             console.log('error' + e)
        //         })

        // },


//////////////////////////////////////////////////////////////////////////////

            //     listarTipoInmueble() {



            // this.axios.get('/buscarParametro/Tipo')
            //     .then((response) => {
            //         this.tablaInmuebles = response.data;
            //     })
            //     .catch((e) => {
            //         console.log('error' + e)
            //     })

       // },



        listaApto(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscarParametro/${item.tipo}`,item)
                .then(res => {
                    this.tablaInmuebles[index].tipo = res.data.tipo;
                })

        },




        //     listarAptos(Apto) {
        //     //  this.dialog = true
        //       console.log(Apto);
        //       this.axios.get(`buscarParametro/${Apto}`)
        //           .then(res => {
        //             this.tablaInmuebles = res.data
        //         })

        // },







        editarInmueble(item) {

            this.axios.put(`/actualizar/${item._id}`, item)
                .then(res => {
                     this.$swal('success!',
                    'Inmueble MODIFICADO exitosamente!',
                    'success');
                    this.close();

                    const index = this.tablaInmuebles.findindex(n => n._id === res.data._id)
                    this.tablaInmuebles[index].tipo = res.data.tipo;
                    this.tablaInmuebles[index].habitaciones = res.data.habitaciones;
                    this.tablaInmuebles[index].descripcion = res.data.decripcion;
                    this.tablaInmuebles[index].contacto = res.data.contacto;

                }).catch(e => {
                    console.log(e.response)
                })

        },

        eliminarInmueble(id) {
            console.log(id);
            this.axios.delete(`/eliminarParametro/${id}`)
                .then(res => {
                       this.$swal('OK!',
                    'Inmueble ELIMINADO exitosamente!',
                    'error');
                  

                    const index = this.tablaInmuebles.findIndex(item => item._id === res.data._id)
                    this.tablaInmuebles.splice(index, 1);
                    this.editedIndex = this.tablaInmuebles.indexOf(item);
                    this.editedItem = Object.assign({}, item)

                }).catch(e => {
                    console.log(e.response)
                })

        }

    },

}
</script>

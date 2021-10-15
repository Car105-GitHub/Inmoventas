<template>
<v-container>

    <v-data-table :headers="headers" :items="tablaInmuebles" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>LISTADO DE INMUEBLES</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <!-- <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            Registro Nuevo Inmueble
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.tipo" label="Tipo de Inmueble"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.habitaciones" label="Habitaciones"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contacto" label="Contacto"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="editarInmueble(editedItem)">
                                Modificar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog> -->
                <!-- <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog> -->
            </v-toolbar>
        </template>
        <!-- <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item._id)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="eliminarInmueble(item._id)">
                mdi-delete
            </v-icon>
        </template> -->
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

        editItem(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscarParametro/${item}`)
                .then(res => {
                    this.editedItem = res.data
                })

        },

        deleteItem(item) {
            this.editedIndex = this.tablaInmuebles.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.tablaInmuebles.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.tablaInmuebles[this.editedIndex], this.editedItem)

            } else {
                this.tablaInmuebles.push(this.editedItem)
            }
            this.close()
        },

        listarInmueble() {

            this.axios.get('/buscarTodo')
                .then((response) => {
                    this.tablaInmuebles = response.data;
                })
                .catch((e) => {
                    console.log('error' + e)
                })

        },


                listarTipoInmueble() {

            this.axios.get('/buscarParametro/tipo')
                .then((response) => {
                    this.tablaInmuebles = response.data;
                })
                .catch((e) => {
                    console.log('error' + e)
                })

        },




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

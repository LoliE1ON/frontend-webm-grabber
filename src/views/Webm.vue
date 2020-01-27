<template>

    <v-container class="grey lighten-5">

        <h3>{{ $route.params.id }} / {{ $route.params.boardId }}</h3>

        <v-row no-gutters>
            <v-col
                    cols="12"
                    sm="4"
                    v-for="(webm, iWebm) in getfiles" :key="iWebm">
                <v-card
                        class="pa-2"
                        outlined
                        tile
                >
                    One of three columns
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import FilesStore from "../store/files.store";

    export default {
        data () {
            return {
                files: {},
            }
        },
        computed: {
            getfiles: function () {
                const newFiles = [];
                this.files[this.$route.params.id][this.$route.params.boardId].forEach((value) => {
                    value.Files.forEach((webm) => {
                        newFiles.push(webm);
                    })
                });
                return newFiles;
            }
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll.Vendors;
            })
        }
    }
</script>
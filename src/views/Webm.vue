<template>
    <v-container class="fill-height" fluid>
        <h3>{{ $route.params.id }} / {{ $route.params.boardId }}</h3>

        {{ files[$route.params.id][$route.params.boardId] }}
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
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll.Vendors;
            })
        }
    }
</script>
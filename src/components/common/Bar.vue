<template>
    <v-navigation-drawer v-model="draw" app>

        <v-list>
            <v-list-group v-for="(file, i) in files.Vendors" :key="i" no-action value="true">

                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ i }}</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item v-for="(board, boardI) in file" :key="i" link>
                    <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="boardI"></v-list-item-title>
                </v-list-item>

            </v-list-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import FilesStore from '../../store/files.store';
    export default {
        props: {
            draw: {
                type: Boolean,
                default: true,
            },
        },
        data () {
            return {
                files: {}
            }
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll;
            })
        }
    }
</script>
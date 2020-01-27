<template>
    <v-navigation-drawer v-model="draw" app>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Boards
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-group v-for="(file, i) in files.Vendors" :key="i" no-action value="true">

                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon color="red">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ i }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item-group v-model="boardActive">
                    <v-list-item :to="'/webm/' + i + '/' + boardI" v-for="(board, boardI) in file" :key="boardI" link>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ boardI }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>

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
                files: {},
                boardActive: -1,
            }
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll;
            })
        }
    }
</script>
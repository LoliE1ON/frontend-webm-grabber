<template>
    <v-navigation-drawer v-model="togleBar" app>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">

                    <v-progress-circular
                            :size="20"
                            :width="2"
                            color="red"
                            indeterminate
                            v-show="loader"
                    ></v-progress-circular>

                    Boards
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-group v-for="(file, i) in files.vendors" :key="i" no-action value="true">

                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon color="red">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ i }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item-group v-model="boardActive">
                    <v-list-item :to="'/webm/' + i + '/' + board.name" v-for="(board, boardI) in file" :key="boardI" link>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ board.name }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>

            </v-list-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import FilesStore from '../store/files.store';
    export default {
        data () {
            return {
                files: {},
                boardActive: -1,
                loader: true,
            }
        },
        computed: {
            togleBar: function () {
                return this.$root.drawBar;
            },
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll;
                this.loader = false;
            })
        }
    }
</script>
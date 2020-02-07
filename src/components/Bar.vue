<template>
    <v-navigation-drawer v-model="toggleBar" app>

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
            <v-list-group v-for="(vendor, i) in vendors" :key="i" no-action value="true">

                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon color="red">mdi-video</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ vendor.vendor }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item-group v-model="boardActive">
                    <v-list-item v-if="board.total" :to="'/webm/' + vendor.vendor + '/' + board.name" v-for="(board, boardI) in vendor.boards" :key="boardI" link>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ board.description }}
                            <v-badge color="red" offset-x="-5" :content="board.total"></v-badge>
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
        data: () => ({
            vendors: {},
            boardActive: -1,
            loader: true,
        }),
        computed: {
            toggleBar: {
                get () { return this.$root.drawBar },
                set () { console.log('Toggle bar') }
            },
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.vendors = FilesStore.getters.getBoards;
                this.loader = false;
            })
        }
    }
</script>

<style scoped>
    .ml {
        margin-left: 5px;
    }
</style>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
    }
    ::-webkit-scrollbar-thumb {
        background: #ebebeb;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #dadada;
    }
</style>
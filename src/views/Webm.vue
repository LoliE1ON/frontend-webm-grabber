<template>

    <v-container class="lighten-5">

        <v-row no-gutters>
            <v-col cols="12" sm="9">
                <Breadcrumbs :items="breadcrumbs"/>
            </v-col>
            <v-col cols="12" sm="3">
                <Volume/>
            </v-col>
        </v-row>

        <v-overlay :value="loader">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-row no-gutters>
            <v-col cols="12" sm="3" v-for="(webm, iWebm) in getFiles" :key="iWebm">
                <WebmCard :webm="webm"/>
            </v-col>
        </v-row>

        <v-card @click="lazyLoad" v-show="totalVideos > currentShowVideos" class="pa-5 ma-4 text-no-wrap text-center text-uppercase">
            <v-icon color="red">mdi-progress-download</v-icon> Load more
        </v-card>

    </v-container>
</template>

<script>
    import FilesStore from "../store/files.store";
    import Breadcrumbs from "../components/common/Breadcrumbs";
    import WebmCard from "../components/common/webm/WebmCard";
    import Volume from "../components/common/player/Volume";

    export default {
        data: () => ({
            files: {},
            loader: true,
            totalVideos: 0,
            currentShowVideos: 23,
        }),
        methods: {
            lazyLoad() {
                this.currentShowVideos = this.currentShowVideos + 24;
            }
        },
        computed: {
            breadcrumbs: function () {
                return [
                    { text: this.$route.params.id, disabled: false, link: false, to: '/' },
                    { text: this.$route.params.boardId, disabled: true, link: false, }
                ]
            },
            getFiles: function () {
                let newFiles = [];
                if(!this.files[this.$route.params.id]) return newFiles;

                newFiles = this.files[this.$route.params.id].filter(b=> b.name == this.$route.params.boardId).map(b => b.threads).flat().map(t => t.files).flat().filter((video, key, all) => {
                    this.totalVideos = all.length;
                    return key <= this.currentShowVideos
                });

                this.loader = false;
                return newFiles;
            }
        },
        mounted() {
            //this.$forceUpdate();
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll.vendors;
            })
        },
        beforeRouteUpdate (to, from, next) {
            this.currentShowVideos = 23;
            window.scrollTo(0,0);
            next();
        },
        components: {
            Volume,
            WebmCard,
            Breadcrumbs
        },
    }
</script>
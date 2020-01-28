<template>

    <v-container class="lighten-5">

        <Breadcrumbs :items="breadcrumbs"/>

        <v-overlay :value="loader">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-row no-gutters>
            <v-col cols="12" sm="3" v-for="(webm, iWebm) in getfiles" :key="iWebm">
                <WebmCard :webm="webm"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import FilesStore from "../store/files.store";
    import Breadcrumbs from "../components/common/Breadcrumbs";
    import WebmCard from "../components/common/webm/WebmCard";

    export default {
        data () {
            return {
                files: {},
                loader: true,
            }
        },
        computed: {
            breadcrumbs: function () {
                return [
                    {
                        text: this.$route.params.id,
                        disabled: false,
                        href: '/',
                    },
                    {
                        text: this.$route.params.boardId,
                        disabled: true,
                        href: '',
                    },
                ]
            },
            getfiles: function () {
                let newFiles = [];
                if(!this.files[this.$route.params.id]) return newFiles;

                newFiles = this.files[this.$route.params.id].filter(b=> b.name == this.$route.params.boardId).map(b => b.Threads).flat().map(t => t.files).flat();
                console.log(newFiles)
                this.loader = false;
                return newFiles;
            }
        },
        mounted() {
            FilesStore.dispatch('getFiles').then(() => {
                this.files = FilesStore.getters.getAll.vendors;
            })
        },
        components: {
            WebmCard,
            Breadcrumbs
        },
    }
</script>
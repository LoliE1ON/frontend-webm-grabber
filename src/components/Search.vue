<template>
    <v-card color="grey lighten-3">
        <v-card-text>
            <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="Description"
                    item-value="API"
                    placeholder="Search video"
                    prepend-icon="mdi-magnify"
                    return-object
            ></v-autocomplete>
        </v-card-text>
        <v-divider></v-divider>
        <v-expand-transition>
            <v-list v-if="model">
                <WebmCard :webm="fields" :height="'400px'"/>
            </v-list>
        </v-expand-transition>
    </v-card>
</template>

<script>
    import FilesStore from "../store/files.store";
    import WebmCard from "./common/webm/WebmCard";

    export default {
        components: {WebmCard},
        data: () => ({
            descriptionLimit: 60,
            entries: [],
            isLoading: false,
            model: null,
            search: null,
        }),

        computed: {
            fields () {
                if (!this.model) return []

                return this.model;
            },
            items () {
                return this.entries.map(entry => {
                    const Description = entry.name.length > this.descriptionLimit
                        ? entry.name.slice(0, this.descriptionLimit) + '...'
                        : entry.name

                    return Object.assign({}, entry, { Description })
                })
            },
        },

        watch: {
            search (val) {
                // Items have already been loaded
                if (this.items.length > 0) return

                // Items have already been requested
                if (this.isLoading) return

                this.isLoading = true

                FilesStore.dispatch('getFiles').then(() => {
                    const files = FilesStore.getters.getDescriptionsFiles;
                    this.count = files.length;
                    this.entries = files;
                    this.isLoading = false
                }).catch((e) => {
                    this.isLoading = false
                })
            },
        },
    }
</script>
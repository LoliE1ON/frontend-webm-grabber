<template>
    <div>
        <Bar/>

        <v-app-bar app color="red" dark>
            <v-app-bar-nav-icon @click="toggleBar" />
            <v-toolbar-title >
                <router-link :to="{ name: 'home'}" class="logo-link">
                    Webm videos
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn :to="{ name: 'home'}" icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

        </v-app-bar>
    </div>
</template>

<script>
    import Bar from "./Bar"
    import Search from "./Search";
    export default {
        methods: {
            toggleBar: function () {
                this.$root.drawBar = !this.$root.drawBar;
            }
        },
        components: {
            Search,
            Bar,
        },
    }
</script>

<style>
    .logo-link {
        color: #fff!important;
        text-decoration: none;
        font-weight: bold;
    }
</style>
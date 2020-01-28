<template>
    <div>
        <Bar/>

        <v-app-bar app color="red" dark>
            <v-app-bar-nav-icon @click="togleBar" />
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
    import Bar from "./Bar"
    export default {
        methods: {
            togleBar: function () {
                this.$root.drawBar = !this.$root.drawBar;
            }
        },
        components: {
            Bar,
        },
    }
</script>
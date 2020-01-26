<template>
    <div>
        <Bar v-bind:draw="drawBar"/>

        <v-app-bar app color="red" dark>
            <v-app-bar-nav-icon @click="drawBar = !drawBar" />
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
    import Bar from "./Bar"
    export default {
        data: function () {
            return {
                drawBar: true,
            }
        },
        components: {
            Bar,
        },
    }
</script>
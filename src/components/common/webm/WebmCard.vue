<template>
    <div>
        <v-card class="pa-2" outlined tile @click="togglePlayerOverlay">
            <v-img :src="webm.Preview" height="200px"></v-img>
        </v-card>

        <div class="text-center">
            <v-overlay :value="overlay">
                <div>
                    <v-btn icon @click="togglePlayerOverlay">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
                <div class="fake-playervideo-container">
                    <video autoplay="autoplay" class="video-player" controls>
                        <source :src="webm.Path">
                    </video>
                </div>
            </v-overlay>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            webm: Object
        },
        data: () => ({
            overlay: false
        }),
        methods: {
            togglePlayerOverlay: function () {
                this.overlay = !this.overlay;
                // Toggle bar
                this.$root.drawBar = !this.$root.drawBar;
            }
        }
    }
</script>

<style scoped>

    .fake-playervideo-container {
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100wv;
        height: 100wh;
    }

    .fake-playervideo-container > video {
        width: 90%;
        height: 90%;
        text-align: center;
    }

</style>

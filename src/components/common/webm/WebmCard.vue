<template>
    <div>
        <v-card class="pa-2" outlined tile @click="togglePlayerOverlay">
            <v-img :src="webm.Preview" height="200px"></v-img>
        </v-card>

        <div class="text-center">
            <v-overlay :value="overlay">
                <div class="fake-playervideo-container">
                    <div class="video">
                        <div>
                            <v-btn icon @click="togglePlayerOverlay">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <video autoplay="autoplay" class="video-player" controls>
                            <source :src="webm.Path">
                        </video>
                    </div>
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
        width: 100vw;
        height: 100vh;
    }
    .video-player {
        height: 100%;
    }
    .fake-playervideo-container > .video {
        width: 100%;
        height: 70%;
        text-align: center;
    }

</style>

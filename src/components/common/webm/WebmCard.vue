<template>
    <div>
        <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card  :elevation="hover ? 16 : 2" class="pa-0 ma-4 text-no-wrap">
                <div v-bind:class="{ red: isViewed() }" class="pa-1 overline text-no-wrap" ref="title">{{ webm.name }}</div>
                <v-img @click="togglePlayerOverlay" :src="webm.preview" class="cpointer" :height="height"></v-img>
            </v-card>
        </v-hover>
        <div class="text-center">
            <v-overlay :value="overlay">
                <div class="fake-playervideo-container">
                    <div class="video">
                        <div>
                            <v-btn icon @click="togglePlayerOverlay">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <video autoplay="autoplay" v-on:loadedmetadata="loadVideo" v-on:volumechange="changeVideoVolume" class="video-player" controls>
                            <source :src="webm.path">
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
            webm: Object,
            height: {
                type: String,
                default: '200px'
            },
        },
        data: () => ({
            overlay: false,
            isActive: false,
            viewedList: [],
        }),
        methods: {
            isViewed() {
              return !!this.viewedList.filter(video => video.path === this.webm.path).length;
            },
            loadVideo(e) {
                e.target.volume = this.$root.volume;
            },
            changeVideoVolume: function (e) {
                this.$root.volume = +e.target.volume;
                localStorage.volume = +e.target.volume;
            },
            togglePlayerOverlay: function () {
                // Mark video
                if(!this.overlay) {
                    this.viewedList.push({path: this.webm.path});
                    localStorage.viewedVideos = JSON.stringify(this.viewedList);
                }
                // Toggle player overlay and sidebar
                this.overlay = !this.overlay;
                this.$root.drawBar = !this.$root.drawBar;
            },
        },
        mounted() {
            // Loading viewed videos of local storage
            if (localStorage.viewedVideos) this.viewedList = JSON.parse(localStorage.viewedVideos);
        }
    }
</script>

<style scoped>
    .cpointer {
        cursor: pointer;
    }
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

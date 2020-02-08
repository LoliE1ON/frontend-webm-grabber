<template>
    <div class="pl-6 pr-6 mt-4">
        <v-slider v-on:change="changeVolume" label="Player Volume" min="0" max="1" :value="getVolume" step="any"></v-slider>
    </div>
</template>


<script>
    export default {
        computed: {
            getVolume: {
                get () { return this.$root.volume },
                set () { console.log('Change volume') }
            },
        },
        methods: {
            changeVolume: function (volume) {
                localStorage.volume = volume;
                this.$root.volume = volume;
            }
        }
    }
</script>
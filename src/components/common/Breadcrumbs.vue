<template>
    <div>
        <v-breadcrumbs :items="items" large></v-breadcrumbs>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: () =>  ([{
                    text: 'Home',
                    disabled: false,
                    link: false,
                    to: '/',
                }])
            },
        },
    }
</script>
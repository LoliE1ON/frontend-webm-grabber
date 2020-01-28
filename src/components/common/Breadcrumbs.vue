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
                default: function () {
                    return [{
                        text: 'Dashboard',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    }]
                }
            },
        },
    }
</script>
<template>
  <v-container class="lighten-5">
      <Search/>
  </v-container>
</template>

<script>
  import Search from "../components/Search";
  export default {
    name: 'home',
    components: {Search},
    data: () => ({
      ///
    }),
  }
</script>

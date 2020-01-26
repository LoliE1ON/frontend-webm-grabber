<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">

      <ul>
        <li v-for="file in files" v-bind:key="file">
          {{ file }}
        </li>
      </ul>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    data: () => {
      return {
        files: {}
      }
    },
  }
</script>

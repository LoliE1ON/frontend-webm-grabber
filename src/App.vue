<template>
  <v-app id="inspire">

    <Header/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>

  import Footer from "./components/common/Footer";
  import Header from "./components/common/Header";

  export default {
    components: {
      Footer,
      Header,
    }
  }
</script>

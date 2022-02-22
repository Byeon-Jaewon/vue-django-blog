<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <helloWorld />
    </v-main>

    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue"
import MainFooter from "../components/MainFooter.vue"
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components: { HelloWorld , MainMenu, MainFooter },

  data: () => ({
    
  }),
};
</script>
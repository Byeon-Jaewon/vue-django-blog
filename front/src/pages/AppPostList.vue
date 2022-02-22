<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <PostList/>
    </v-main>

    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import MainMenu from '../components/MainMenu.vue';
import MainFooter from "../components/MainFooter.vue";
import PostList from '../components/PostList.vue';

export default {

  components: { PostList, MainMenu, MainFooter },

  data: () => ({ 
    }),
}
</script>
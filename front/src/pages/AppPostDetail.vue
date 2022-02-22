<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <PostDetail/>
    </v-main>

    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import MainMenu from '../components/MainMenu.vue';
import MainFooter from "../components/MainFooter.vue"
import PostDetail from '../components/PostDetail.vue';

export default {

  components: { PostDetail, MainMenu, MainFooter },

  data: () => ({ 
    
    }),
}
</script>
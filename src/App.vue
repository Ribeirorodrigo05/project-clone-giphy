<template>
  <v-app class='grey lighten-5'>
      <Navbar />
    <v-main class='content'>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',

  components: {
    //Home,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>


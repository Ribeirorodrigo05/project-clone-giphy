<template>
  <nav class="nav">
    <v-toolbar   min-width='100%' class='grey darken-4'>
        <router-link to='/'>
          <v-img  class="ml-4" max-height="100" max-width="150" :src="require('../assets/logo.png')" /> 
          </router-link>
          <v-spacer></v-spacer>
          
          <router-link to="/comedy" class="mr-5 white--text link pb-2"> Comedy</router-link>
          <router-link to="/sports" class="mr-5 white--text link pb-2"> Sports</router-link>
          <router-link to="/animals" class="mr-5 white--text link pb-2"> Animals</router-link>
          <router-link to="/emotions" class="mr-5 white--text link pb-2"> Emotions</router-link>
          <router-link to="/cartoons" class="mr-5 white--text link pb-2"> Cartoons</router-link>
          <router-link to="/search" class="mr-5 white--text link pb-2"> Search</router-link>
      
      <v-spacer></v-spacer>

      <div class="icons">

          <v-btn color="black" fab small>
              <v-icon class="" color="white" title="email" large> {{ email }} </v-icon>
          </v-btn>
          <v-btn color="black" fab small>
              <v-icon class="" color="white" title="email" large> {{ github }} </v-icon>
          </v-btn>
          <v-btn color="black" fab small>

              <v-icon class="" color="white" title="email" large> {{ insta }} </v-icon>
          </v-btn>
          <v-btn color="black" fab small >
              <v-icon class="" color="white" title="email" large> {{ facebook }} </v-icon>
          </v-btn>
      </div>
    </v-toolbar>
  </nav>
</template>

<script>
import { mdiEmail } from '@mdi/js'
import { mdiGithub } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
export default {
    name:'Navbar',
    data(){
        return{
            email:mdiEmail,
            github:mdiGithub,
            insta:mdiInstagram,
            facebook:mdiFacebook
        }
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    right: 0px;
    left: 0px;
    z-index: 1;
}

.link       {
    text-decoration: none;  
}

.link:hover {
        border-bottom: 3px solid #FFF;
}
</style>

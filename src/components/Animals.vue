<template>
  <v-container class="pt-16 container" >
      <h1>#Animals Gifs</h1>
      <div v-if="gifs" class="gif-content">
                <div v-for="gif in gifs" v-bind:key="gif.url.id" class="gif">
                        <v-img :src="gif.images.original.url" alt="image" class="m-2"/>
                </div>
        </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:"Animals",
    data(){ 
        return{
            gifs:[],
            
           
        }
    },
       
    mounted(){
            axios.get('https://api.giphy.com/v1/gifs/search?api_key=xwAYvbtXNtVXT1ADNMy0aA1IxGclnftP&q=animals&limit=21&rating=g')
            .then(response => {console.log(response.data);
                this.gifs = response.data.data;
            }
                )
    }
}
</script>

<style>

    .container {
        margin:auto;
        
    }

    .gif-content{
        display: flex;
        flex-wrap: wrap;
        
    }

    .gif {
        width: 25%;
        margin: 10px;
        height: 15%;
    }

</style>
<template>
  <v-container class="pt-16 container" >
      <h1>#Trending Tops Gifs</h1>
      <div v-if="gifs" class="gif-content">
                <div v-for="gif in gifs" v-bind:key="gif.url.id" class="gif">
                        <v-img :src="gif.images.original.url" alt="image" class="m-2"/>
                </div>
        </div>
        <v-btn @click="moreGift">MORE +</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name:"Home",
    data(){ 
        return{
            gifs:[],
            request:20
        }
    }, 
    methods:{
        loadGift(){
            axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=xwAYvbtXNtVXT1ADNMy0aA1IxGclnftP&limit=${this.request}&rating=g`)
            .then(response => {console.log(response.data);
                this.gifs = response.data.data;
            })

        },
        moreGift(){
            this.request = this.request + 5
            console.log(this.request)
            this.loadGift()
        }
    },
    mounted(){
        this.loadGift()
            
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
        align-items: center;
        justify-content: center;
        
    }

    .gif {
        width: 25%;
        margin: 10px;
        height: 15%;
    }

</style>
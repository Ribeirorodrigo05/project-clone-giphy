<template>
  <v-container class="pt-16 container" >
      <h1># Search Gifs</h1>
        <div class="search d-flex ">
            <v-row align="center" justify="center">
                <v-col cols="8">
                <input type="text" name="search" id="search" v-model="query"  placeholder="search here for your favorite GIF..." class="mt-4 pb-2 pt-2 pl-2"  style="width:100%">
                </v-col>
            </v-row>
                <v-row align="center" justify="right">
                <v-col cols="2">
                    <v-btn v-on:click="findGifs" width="100" dark>
                        <v-icon>
                            {{seacrhIcon}}
                        </v-icon>
                    </v-btn>
                    </v-col>
            </v-row>
                </div>
      <div v-if="gifs" class="gif-content">
                <div v-for="gif in gifs" v-bind:key="gif.url.id" class="gif">
                        <v-img :src="gif.images.original.url" alt="image" class="m-2"/>
                </div>
        </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mdiMagnify } from '@mdi/js';export default {
    name:"Search",
    data(){ 
        return{
            gifs:[],
            query:"",
            seacrhIcon: mdiMagnify 
            
           
        }
    },
       
    methods:{
        findGifs(){
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=xwAYvbtXNtVXT1ADNMy0aA1IxGclnftP&q=${this.query}&limit=21&rating=g`)
            .then(response => {console.log(response.data);
                this.gifs = response.data.data;
            }
                )
    }
    }
}
</script>

<style>

    .container {
        margin:auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        
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

    #search {
        border: 1px solid #000;
        border-radius: 8px;
    }

</style>
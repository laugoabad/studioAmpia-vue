<template>
  <div id="blog" class="container mx-auto px-5">
    <h2 class="title-section pb-3">Blog</h2>
    <div v-if="!leerMas" class="mt-5">
      <div class="row d-flex justify-content-center mx-3">
        <article
          v-for="(item, index) of blog"
          :key="index"
          class="card col-12 col-md-4 col-xl-3"
          @click="checkLeerMas(index)"
        >
          <div class="card-img-top embed-responsive d-flex align-items-center justify-content-center">
            <img :src="getImgUrl(item.imagen)" alt />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center mb-1">{{item.titulo}}</h5>
          </div>

          <div class="info float-right font-weight-bold">+info</div>
        </article>
      </div>
    </div>

    <template v-else>
      <article class="row d-flex justify-content-center">
        <div class="card col-12">
          <div class="card-body">
            <h5 class="card-title text-center">{{blog[i].titulo}}</h5>
            <p class="p-1" style="white-space:pre-line;">{{blog[i].texto}}</p>
            <div class="btn btn-success px-3 py-1 mt-4 text-center texto-chico font-weight-bold" @click="leerMas = !leerMas">
           Torna indietro
          </div>
          </div>
         
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Eventi",

  data() {
    return {
      leerMas: false
    };
  },
  computed: {
    ...mapState(["blog"])
  },
  methods: {
    checkLeerMas(index) {
      this.leerMas = !this.leerMas;
      this.i = index;
    },
    getImgUrl(pic) {
      return require("./../assets/imgs/" + pic);
    }
  }
};
</script>  


<style lang="scss" scoped>
@import "../../public/css/styles.scss";
  .card {
    margin: 2em;
    .card-img-top {
       width: 100%;
       height: 24vh;
       object-fit: cover;
    }

    .card-body {
      color: $dark;
      background-color: $neutral;
      border-top: 1px solid dark;
      padding: 1em;
      p {
         font-size: 1.4em;
      }
      
    }
    .card-title {
      font-size: 1.8em;
      font-weight: bold;
      padding: 1em 0em;
    }
    &:hover {
      transform: scale(1.1);
      -moz-transform: scale(1.1);
      transition-duration: 1s;
      -moz-transition-duration: 1s;
    }
  }
 
   .info {
    font-size: 1.4em;
    color: $scarlet;
    padding: 1em;
    &:hover {
      color: #2e933c;
    }
    
  }

@media (min-width: 1024px) {
 .card {
   margin: 3em;
    .card-img-top {
        height: 26vh;
    }
     .card-title {
      font-size: 2em;
     }
    .card-body {
      padding: 2rem;
    }
 }
}

</style>
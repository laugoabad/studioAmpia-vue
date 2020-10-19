<template>
  <div id="blog">
    <h2 class="sub-titulo">Blog</h2>
    <div v-if="!leerMas" class="mt-5">
      <div class="row d-flex justify-content-center mx-3">
        <article
          v-for="(item, index) of blog"
          :key="index"
          class="card col-10 col-md-4 col-xl-3"
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
      <article class="row d-flex justify-content-center m-5">
        <div class="card servizi-esteso col-12">
          <div class="card-body">
            <h5 class="card-title text-center">{{blog[i].titulo}}</h5>
            <p class="p-1" style="white-space:pre-line;">{{blog[i].texto}}</p>
          </div>
          <div class="d-flex justify-content-center">
            <div class="boton text-center" @click="leerMas = !leerMas">Torna indietro</div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Blog",

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
    margin: 2rem;
    padding-bottom: 2rem;
    .card-img-top {
       width: 100%;
       height: 24vh;
       object-fit: cover;
    }

    .card-body {
      color: $dark;
      background-color: $neutral;
      border-top: 1px solid dark;
      font-size: 1.2rem;
      padding: 2rem;
    }
    .card-title {
      font-size: 1.4rem;
      font-weight: bold;
      padding: 1rem 0rem;
    }
  }

   .info {
    font-size: 1.4em;
    color: $scarlet;
    padding: 1em;
  }

@media (min-width: 1024px) {
 .card {
   margin: 3em;
    .card-img-top {
        height: 26vh;
    }
    .card-body {
      padding: 3rem;
    }
    .card-title {
      font-size: 1.6rem;
    }
 }
}

</style>
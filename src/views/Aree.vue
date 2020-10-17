<template>
  <div id="aree" class="container mx-auto px-5">
    <h2 class="title-section pb-3 mb-5">Aree d'Interesse</h2>
    <div v-if="!leerMas" class="container-aree">
      <ul>
        <li v-for="(item, index) of aree" :key="index" class="mb-5">
          <h3 class="my-3 title-aree texto-grande font-weight-bold">{{item.titulo}}</h3>
          <div class="">
            <p style="white-space:pre-line;" class="texto-normal">{{item.texto1}}</p>
            <a href="#aree">
              <button  type="button" class="btn btn-read px-2 py-1 mt-3" @click="checkLeerMas(index)">
                <span v-if="leerMas">Leggere -</span>
                <span v-else>Leggere +</span>
              </button>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <template v-else>
      <h3 class="my-3 texto-grande font-weight-bold">{{aree[i].titulo}}</h3>
      <p style="white-space:pre-line;" class="texto-normal">
        {{aree[i].texto1}}
        {{aree[i].texto2}}
      </p>
      <button  type="button" class="btn btn-read px-2 py-1 mt-3" @click="leerMas=!leerMas">
        <span v-if="leerMas">Leggere -</span>
        <span v-else>Leggere +</span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      leerMas: false
    };
  },
  computed: {
    ...mapState(["aree"])
  },
  methods: {
    checkLeerMas(index) {
      this.leerMas = !this.leerMas;
      this.i = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/styles.scss";
.title-aree {
   background-color: $neutral;
   color: $dark;
   padding: 1em;
}
</style>
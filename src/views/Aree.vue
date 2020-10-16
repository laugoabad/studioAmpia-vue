<template>
  <div id="aree" class="container mx-auto">
    <div classs="mx-3">
      <h2 class="titulo-seccion">Aree d'Interesse</h2>
    </div>
    <div v-if="!leerMas" class="container-aree">
      <ul>
        <li v-for="(item, index) of aree" :key="index">
          <h3 class="mt-5 font-weight-bold">{{item.titulo}}</h3>
          <div class="texto-normal">
            <p style="white-space:pre-line;" class="mt-n3">{{item.texto1}}</p>
            <a href="#aree">
              <button class="btn btn-secondary" @click="checkLeerMas(index)">
                <span v-if="leerMas">Leggere -</span>
                <span v-else>Leggere +</span>
              </button>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <template v-else>
      <h3 class="mt-5 font-weight-bold">{{aree[i].titulo}}</h3>
      <p style="white-space:pre-line;" class="texto-normal mt-n3">
        {{aree[i].texto1}}
        {{aree[i].texto2}}
      </p>
      <button class="btn btn-secondary" @click="leerMas=!leerMas">
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
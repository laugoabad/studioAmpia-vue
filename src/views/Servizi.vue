<template>
  <div id="servizi" class="container mx-auto">
    <h2 class="title-section pb-3 mb-5">Servizi</h2>
     <div class="d-flex align-items-center mb-5">
        <p class="px-5 text-resp-big" style="white-space:pre-wrap;">{{texto}}</p>
      </div>

      <div class="row">
          <div class="col-12 col-lg-6"><img src="./../assets/imgs/servicios-2.png" alt="servizi" /></div>
          <div class="col-12 col-lg-6"><img src="./../assets/imgs/servicios-3.png" alt="servizi2" /></div>
      </div>

    <div v-if="!leerMas" class="mt-5">
      <div class="row d-flex justify-content-center mx-5">
        <article
          v-for="(item, index) of servizi"
          :key="index"
          class="card col-8 col-md-3 col-xl-3"
          @click="checkLeerMas(index)"
        >
          <div class="card-img-top mx-auto">
            <img :src="getImgUrl(item.imagen)" alt="" />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center mb-3">{{item.titulo}}</h5>
          </div>
          <div class="info float-right font-weight-bold">+info</div>
        </article>
      </div>
    </div>

    <template v-else>
      <article class="row d-flex justify-content-center m-5">
        <div class="card col-12">
          <div class="card-body mt-4">
            <h5 class="card-title text-center mt-3 mb-2">{{servizi[i].titulo}}</h5>
            <p class="text p-4" style="white-space:pre-line;">{{servizi[i].texto}}</p>
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-success px-3 py-1 mb-4 text-center texto-chico font-weight-bold" @click="leerMas = !leerMas">Torna indietro</div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      leerMas: false,
      texto:
        "Lo studio offre un servizio qualificato di psicodiagnosi, sostegno e psicoterapia, dedicato a famiglie, genitori, adolescenti, bambini e adulti, in un contesto protetto, inclusivo ed accogliente.\nL’équipe, che si avvale di collaborazioni multidisciplinari, valuta e progetta interventi di cura specifici e pensati per ciascun paziente."
    };
  },
  computed: {
    ...mapState(["servizi"])
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
#servizi {
  img {
    width: 60%;
    height: auto;
    border-radius: 8em;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  .text-resp-big {
    font-size: 2em;
    color: $predominant;
  }
  .card {
    color: $predominant;
    min-height: 10em;
    margin: 1.8em;
    padding: 0em 1.4em 1em 1.4em;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1);
    -moz-transform: scale(1);
    transition-duration: 1s;
    -moz-transition-duration: 1s;
  
.card-title {
    font-size: 1.8em;
    font-weight: bold;
}

&:hover {
    transform: scale(1.02);
    -moz-transform: scale(1.02);
    transition-duration: 1s;
    -moz-transition-duration: 1s;
}

.card-img-top {
    max-width: 100%;
    max-height: 5em;
    margin-bottom: 2em ;
    width: auto;
    }
  }
  .info {
      font-size: 1.4em; 
      color: $scarlet;
  }
  .text {
      font-size: 1.4em;
  }
}

@media (min-width: 1024px) {
  #servizi img {
    margin-bottom: 0em;
  }
  .text-resp-big {
    font-size: 2em;
  }
}
</style>
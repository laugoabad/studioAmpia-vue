<template>
  <div id="eventi" class="container mx-auto">
    <!-- <h2 class="title-section pb-3 mb-5">Eventi</h2>
   
    <h2 class="title">Calendario</h2> -->

    <!-- <div class="row calendario mx-auto">
      <article v-for="(fecha, index) of fechas" :key="index" class="col-12 mx-auto">
        <div v-if="fecha.giorno!=='' ">
          <div :class="{'row-striped-grey': index % 2 === 0, 'row-striped-white': index % 2 !== 0}">
            <div class="row">
              <div class="col-3 text-center">
                <h2 class="display-4">
                  <span class="badge badge-secondary">{{fecha.giorno}}</span>
                </h2>
                <h3>
                  <strong>{{fecha.mese}}</strong>
                </h3>
              </div>
              <div class="col-9">
                <h4 class="text-uppercase texto-normal">
                  <strong>{{fecha.titulo}}</strong>
                </h4>

                <div class="fecha texto-chico">
                  <img src="./../assets/imgs/time.png" alt width="10" height="10" />
                  <strong>{{fecha.ora}}</strong>
                </div>

                <div class="fecha texto-chico">
                  <img src="./../assets/imgs/location.png" alt width="10" height="10" />
                  {{fecha.luogo}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>  -->
  </div>
</template>

<script>
export default {
  name: "Eventi",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/styles.scss";

</style>
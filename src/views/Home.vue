<template>
  <div id="home" class="home">
    <div class="d-flex justify-content-center mb-1">
      <img src="./../assets/imgs/logo.png" class="logo m-1" alt="logo" />
    </div>
    <div class="title d-flex justify-content-center">Studio Ampia</div>
    <h5 class="text-center sub-title d-flex justify-content-center mb-4">
      Medici &nbsp;|&nbsp; Psicologi &nbsp; | &nbsp; Psicoterapeuti
      <br />Specializzati in Infanzia ed Adolescienza
    </h5>
    <div class="intro">
      <p style="white-space:pre-line;">
        {{textoIntro}}
      </p>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return { 
   }
  },
   computed: {
       ...mapState(['textoIntro'])
      }, 
    }
</script>

<style lang="scss" scoped>
@import "../../public/css/styles.scss";
.home {
  padding-top: 8em;
  
}

.title {
  font-family: 'Cinzel', serif;
  font-size: 4.5em;
}
.sub-title {
   font-size: 2em;
   line-height: 1.8em;
}
img {
  width: 7em;
  height: 7em;
}
.intro {
  background-image: url(./../assets/imgs/acquarello-giallo.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  p{
    padding: 2em 2em;
    font-size: 1.4em;
  }
}

@media (min-width: 1024px) {
  .intro {
    p {
      padding: 3em 6em;
    font-size: 1.8em;
    }
  }
}
</style>

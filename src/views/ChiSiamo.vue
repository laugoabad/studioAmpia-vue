<template>
    <div id="chisiamo" class="container mx-auto">
        <div >
            <h2 class="title-section pb-3">Chi Siamo
            </h2>
        </div>
        <div v-for="(item, index) of chiSiamo"  :key="index" class="elem text-left mx-auto pt-5"> 
            <h3 class="title mb-3">
                {{item.titulo}}
            </h3>
            
           <p class="texto-normal pb-1">
           <span><img src="./../assets/imgs/phone.png" class="mr-2"></span>
            
               &nbsp;&nbsp;{{item.tel}}
            </p>
            <p class="texto-normal pb-3">
             <span><img src="./../assets/imgs/mail.png" class="mr-2"></span>   
               &nbsp;{{item.mail}}
            </p>
            <p style="white-space:pre-line;" class="texto-normal">
                {{item.texto1}}
            </p>        
            <p style="white-space:pre-line;" class="collapse texto-normal" :class="'mostrar'+index">
                {{item.texto2}}
            </p>
             <button type="button" class="btn btn-success px-2 py-1 mt-3" data-toggle="collapse" :data-target="'.mostrar'+index" @click="ver('leerMas'+index);">
                <span v-if="indice" class="texto-chico">Leggere&nbsp; -</span>
                <span v-else  class="texto-chico">Leggere &nbsp; +</span>
            </button> 
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChiSiamo",

  data() {
    return { 
      leerMas0: false,
      leerMas1: false,
      leerMas2: false,
      leerMas3: false,
      indice: false
   }
  },
  computed: {
       ...mapState(['chiSiamo'])
    },
    methods: {
        ver (indice) {
          console.log(indice);
          this.indice = !this.indice;
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/css/styles.scss";
.elem {
    width: 80%;
    
img {
    width: 1.5em;
    height: 1.5em;
  }
}
@media (min-width: 1024px) {
  .elem {
      width: 70%;
  }
}

</style>
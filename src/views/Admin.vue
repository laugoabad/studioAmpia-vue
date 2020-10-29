<template>
  <div id="admin" class="container mx-auto">
    <div class="container">
      <p>{{data.titulo}}</p>
       <p>{{data.texto}}</p>
    </div>

    <form @submit.prevent="postBlog">
      <input placeholder="name" v-model="post.titulo">
      <input placeholder="title" v-model="post.texto">
      <br>
      <button type="submit">Create</button>
    </form>
    {{data}}
    <!-- <form name="blog" method="post" class=" ml-auto mr-auto" >
        <input type="hidden" name="form-name" value="contacto" />
        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="titulo" class="texto-normal">Titulo</label>
            <input type="text" v-model="form.titulo" class="form-control texto-chico" id="titulo" name="titulo" />
          </div>
        </div>
        <div class="form-group">
          <label for="texto" class="texto-chico">Texto:</label>
          <textarea v-model="form.texto" class="form-control texto-chico" rows="5" id="texto" name="texto"></textarea>
        </div>
        <button type="submit" @click="postBlog(form)" class="btn btn-primary texto-normal px-3 py-1 m-3">Enviar</button>
      </form> -->
  </div>
</template>

<script>
export default {
  name: "Admin",

  data() {
    return {
      data: {},
      post: {
        titulo: '',
        texto: ''
      },
      contador: 0,
      form: {
        titulo : '',
        texto : ''
      },
      mostrar: false
    }
  },

  beforeMount(){
    this.getBlogs();
  },

  methods: {
    async getBlogs() {
      const res = await fetch('./blog.json');
      const data = await res.json();
      this.data = data;
    },

    async postBlog() {
      const request = new Request( "./adminblog.json/posts",
        {
          method: "POST",
          mode: "cors",
          cache: "default",
          body: JSON.stringify(this.post)
        }
      );
      const res = await fetch(request);
      const data = await res.json();
      this.data = data;
    }

    // postBlog(blog) {
    
    // }
  },
  created() {
    this.getBlogs();
    console.log("Foi");
   
  },


   mounted: function(){
    let datosDB = JSON.parse(localStorage.getItem('local-form'));
   
      if (datosDB === null) {
        this.form = []
      }else{
        this.form = datosDB;
        console.log('entra en else', this.form);
        
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/css/styles.scss";
#admin {
 padding: 10em 0em;
}

</style>
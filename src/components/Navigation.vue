<template>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation" >
        <router-link to="/" class="navbar-brand" href="#">
          <img src="./../assets/imgs/logo.png" alt=""> Studio Ampia</router-link>
        <button class="navbar-toggler mr-3" type="button" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
               <router-link  to="/chisiamo" v-scroll-to="{el: '#chisiamo', duration: 1000 }" class="nav-link">Chi Siamo</router-link> 
            </li>
            <li class="nav-item">
              <router-link to="/servizi" v-scroll-to="{el: '#servizi', duration: 2500 }" class="nav-link">Servizi</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aree" v-scroll-to="{el: '#aree', duration: 2000 }" class="nav-link">Aree d'Interesse</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/blog"  v-scroll-to="{el: '#blog', duration: 3000 }" class="nav-link">Blog</router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/eventi"  v-scroll-to="{el: '#eventi', duration: 3000 }" class="nav-link">Eventi</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                   Contatto
                </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a href="mailto:ampia.torino@gmail.com" class="dropdown-item ">
                  <img src="./../assets/imgs/mail.png" alt="">
                  ampia.torino@gmail.com
                </a>
                <div class="dropdown-item " >
                   <img src="./../assets/imgs/phone.png" alt="">
                  +39 370 37 08 297
                </div>
                <div class="dropdown-item" >
                   <img src="./../assets/imgs/location.png" alt="">
                  C.so Francia 131 - 1.138, Torino
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return { 
   }
  },
  
    }
</script>


<style lang="scss" scoped>
@import "../../public/css/styles.scss";

nav {
  padding: 1em;
  background-color: $neutral;
  .navbar-brand {
    font-size: 1.8em;
    font-weight: 600;
    color: $scarlet;
    img {
      width: 4em;
      height: 4em;
      margin-right: 1em;
    }
  }

  a {
    font-size: 1.4em;
    margin-right: 1em;
    &.nav-link.router-link-exact-active.router-link-active{
      color: $scarlet;
      font-weight: 800;
    }
  }

  .navbar-light .navbar-nav .active>.nav-link {
     color: #42b983;
  }
  .dropdown-menu {
    padding: 1.4em;
    a, div{
    font-size: 1.6em;
    padding: 0.5em;
    img {
      width: 1.8em;
      height: 1.8em;
      margin-right: 0.5em;
    }
    }
  }
}
.navbar-toggler {
  border-color: rgba(0,0,0,0);
}
.navbar-toggler-icon {
  background-image: url('./../assets/imgs/menu.png');
  width: 2.6em;
  height: 2.6em;
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 1s;
   transition-timing-function: ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity :0;
}
</style>
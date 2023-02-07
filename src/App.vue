<template>
  <div id="app">
    <div v-if="logado">
      <InicioApre />
    </div>
    <div v-else>
      <InicioEstab />
    </div>
  </div>
</template>
<script>
import InicioApre from './pages/Apresentacao/InicioApre.vue'
import InicioEstab from './pages/Estabelecimento/InicioEstab.vue'

export default{
  name: "App",
  components: {InicioApre, InicioEstab},
  data(){
    return{
      logado: this.$store.state.isMenuTopVisible

    }
  },
  methods: {
    stateMenu(){
      this.$store.commit('navVisible')
      console.log(this.$store.state.isMenuTopVisible)
      //console.log("aasdas")
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;

}
#app{
  width: 100vw;
  height: 100vh;
  background-color: #333;

}
</style>
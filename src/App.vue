<template>
  <div id="app">
    <InicioApre />
  </div>
</template>
<script>
import InicioApre from './pages/Apresentacao/InicioApre.vue'

export default{
  name: "App",
  components: {InicioApre},
  data(){
    return{

    }
  },
  methods: {
    search(val){

    }
  }
}
</script>
<style>
#app{
  width: 100%;
  height: 100%;

}
</style>
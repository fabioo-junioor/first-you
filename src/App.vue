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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #333;

}
</style>
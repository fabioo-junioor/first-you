<template>
  <div id="app">
    <MenuSidebar />
    <router-view />
  </div>
</template>
<script>
import MenuSidebar from './components/MenuSidebar.vue'

export default{
  name: "App",
  components: {MenuSidebar},
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
  display: flex;
  justify-content: center;
  
}
</style>
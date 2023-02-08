<template>
  <div id="inicioApre">
    <MenuSidebar />
    <router-view />
  </div>
</template>
<script>
import MenuSidebar from '../../components/MenuSidebar.vue'

export default {
  name: "InicioApre",
  components: {MenuSidebar},
  data(){
    return{
      
    }
  }

}
</script>
<style>
#inicioApre {
  height: 100%;

}
</style>
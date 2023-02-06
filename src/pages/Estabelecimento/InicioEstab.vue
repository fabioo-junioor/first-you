<template>
  <div id="inicioEstab">
    <MenuEstabelecimento />
    <router-view />
  </div>
</template>
<script>
import MenuEstabelecimento from '../../components/MenuEstabelecimento.vue'

export default{
  components: {MenuEstabelecimento}

}
</script>
<style>
#inicioEstab {
  height: 100%;
  
}
</style>
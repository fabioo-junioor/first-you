<template>
  <div id="inicioApre">
    <MenuApresentacao />
    <router-view />
  </div>
</template>
<script>
import MenuApresentacao from '../../components/MenuApresentacao.vue'

export default {
  name: "InicioApre",
  components: {MenuApresentacao}
};
</script>
<style>
#inicioApre {
  width: 100vw;
  height: 100%;

}
</style>
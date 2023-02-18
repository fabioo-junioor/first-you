<template>
  <div id="inicioEstab">
    <CardUser
      v-for="card in usuario" :key="card"
      :idUsuario="card.idUsuario"
      :nome="card.nome"
      :observacao="card.observacao"
      :data="card.data"/>
  </div>
</template>
<script>
import CardUser from '../../components/CardUser.vue'

export default{
  name: "InicioEstab",
  components: {CardUser},
  data(){
    return{
      usuario: [
        {
          idUsuario: 1,
          nome: 'Fabio Junior',
          observacao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
          data: '01/01/2000'
          
        },
        {
          idUsuario: 2,
          nome: 'Maria Silva',
          observacao: 'sem salada',
          data: '12/02/1900'

        }
      ]
    }
  }

}
</script>
<style>
#inicioEstab {
  width: 80%;
  height: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
#inicioEstab .card{
  background-color: #fff;
  box-shadow: 0px 0px 5px #252525;
  border-radius: 10px;

}
</style>
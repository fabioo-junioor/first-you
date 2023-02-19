<template>
  <div id="inicioEstab">
    <CardUser
      v-for="card in usuario" :key="card"
      :idUsuario="card.idUsuario"
      :nome="card.nome"
      :observacao="card.observacao"
      :qtdPessoas="card.qtdPessoas"
      :data="card.data"/>
  </div>
</template>
<script>
import CardUser from '../../components/CardUser.vue'
import url from '../../config/global.js'

export default{
  name: "InicioEstab",
  components: {CardUser},
  data(){
    return{
      idEstabelecimento: localStorage.getItem('idEstabLogado'),
      usuario: [
        {
          idUsuario: null,
          nome: '',
          data: '',
          observacao: '',
          qtdPessoas: null

        }
      ]
    }
  },
  methods: {
    buscaUsuarios(){
      var dadosEstabelecimento = {idEstabelecimento: this.idEstabelecimento}
      fetch(url+'selectUsers.php?buscarUsers=1', {
        method: "POST",
        body: JSON.stringify(dadosEstabelecimento)
      })
        .then((res) => res.json())
        .then((dados) => {
          console.log("Users: ", dados)
          this.usuario = dados
        
        })
          .catch(console.log)

    }
  },
  created(){
    this.buscaUsuarios()

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
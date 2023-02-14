<template>
  <div id="inicioUser">
    <CardEstab
      v-for=" card in estabelecimento" :key="card"
      class="card"
      @cancelarAgendamento="cancelarAgendamento"
      @agendar="agendar"
      @addFavorito="addFavorito"
      @removeFavorito="removeFavorito"
      :idEstabelecimento="card.idEstabelecimento"
      :agendado="card.agendado"
      :favorito="card.favorito"
      :nome="card.nome"
      :descricao="card.descricao"
      :imgSrc= "require('../../assets/exemple/img_capa.jpg') "/>
  </div>
  <ModalAgendar
    @alertMsg="alertMsg"
    :idEscolhido="idEscolhido"
    :nomeEscolhido="nomeEscolhido"/>
</template>
<script>
import CardEstab from '../../components/CardEstab.vue'
import ModalAgendar from '../../components/ModalAgendar.vue'
const url = "http://localhost/speedreservaback/"

export default{
  name: "InicioUser",
  components: {CardEstab, ModalAgendar},
  data(){
    return{
      idEscolhido: null,
      nomeEscolhido: '',
      estabelecimento: [        
        {
          idEstabelecimento: '',
          nome: '',
          descricao: '',
          agendado: '0',
          favorito: '0',
    
        }        
      ]
    }
  },
  methods: {
    cancelarAgendamento(idEstabelecimento){
      console.log("Cancelou agendamento-> ", idEstabelecimento)
      this.estabelecimento.forEach(e => {
        if(idEstabelecimento === e.idEstabelecimento){
          //e.agendado = !e.agendado

        }
      })
    },
    agendar(idEstabelecimento){
      console.log("Agendou-> ", idEstabelecimento)
      this.estabelecimento.forEach(e => {
        if(idEstabelecimento === e.idEstabelecimento){
          this.idEscolhido = e.idEstabelecimento
          this.nomeEscolhido = e.nome
          //e.agendado = !e.agendado
          this.$root.$emit('bv::show::modal', 'modalAgendar')

        }
      })
    },
    addFavorito(idEstabelecimento){
      var dadosFavorito = {idUsuario: localStorage.getItem('idUserLogado'), idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?insertFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito == 'success'){
            console.log("Favorito-> ", idEstabelecimento)
              this.$router.go(0)

            }
        })
          .catch(console.log)

    },
    removeFavorito(idEstabelecimento){
      var dadosFavorito = {idUsuario: localStorage.getItem('idUserLogado'), idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?deleteFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito == 'success'){
            console.log("Removeu favorito-> ", idEstabelecimento)
            this.$router.go(0)

            }
        })
          .catch(console.log)

    },
    buscaEstabelecimentos(){
      var dadosUser = {idUsuario: localStorage.getItem('idUserLogado')}
      fetch(url+'selectEstabs.php?buscarEstabs=1', {
        method: "POST",
        body: JSON.stringify(dadosUser)
      })
        .then((res) => res.json())
        .then((dados) => {
          console.log("-> ", dados)
          this.estabelecimento = dados
          console.log("--> ", this.estabelecimento)
        
        })
          .catch(console.log)

    }
  },
  created(){
    this.buscaEstabelecimentos()

  }
}
</script>
<style>
#inicioUser {
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
}
#inicioUser .card{
  background-color: #494949;
  box-shadow: 2px 2px 5px #252525;
  
}
</style>
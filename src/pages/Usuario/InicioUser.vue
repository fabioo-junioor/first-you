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
      :statusHorario="card.statusHorario"
      :imgSrc= "require('../../assets/exemple/img_capa.jpg') "/>
  </div>
  <ModalAgendar
    @alertMsg="alertMsg"
    :idEstabelecimento="idEstabelecimento"
    :nomeEscolhido="nomeEscolhido"
    :idUsuario="idUsuario"/>
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
      idUsuario: localStorage.getItem('idUserLogado'),
      estabelecimento: [        
        {
          idEstabelecimento: '',
          nome: '',
          descricao: '',
          agendado: null,
          favorito: null,
          statusHorario: ''
    
        }        
      ]
    }
  },
  methods: {
    cancelarAgendamento(idEstabelecimento){
      var dadosAgendamento = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteAgendamento.php?deleteAgendamento=1', {
        method: "POST",
        body: JSON.stringify(dadosAgendamento)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idAgendamento == 'success'){
            console.log("Cancelou agendamento-> ", idEstabelecimento)
              this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.agendado = null

                  }
              })
            }
        })
          .catch(console.log)
    },
    agendar(idEstabelecimento){
      this.estabelecimento.forEach(e => {
        if(idEstabelecimento === e.idEstabelecimento){
          this.idEstabelecimento = e.idEstabelecimento
          this.nomeEscolhido = e.nome
          this.$root.$emit('bv::show::modal', 'modalAgendar')

        }
      })
    },
    addFavorito(idEstabelecimento){
      var dadosFavorito = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?insertFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito == 'success'){
            console.log("Favorito-> ", idEstabelecimento)
              this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.favorito = dados[0].idFavorito

                  }
              })
            }
        })
          .catch(console.log)

    },
    removeFavorito(idEstabelecimento){
      var dadosFavorito = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?deleteFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito == 'success'){
            console.log("Removeu favorito-> ", idEstabelecimento)
            this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.favorito = null

                  }
              })
            }
        })
          .catch(console.log)

    },
    buscaEstabelecimentos(){
      var dadosUser = {idUsuario: this.idUsuario}
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
  align-items: flex-start;
  
}
#inicioUser .card{
  background-color: #fff;
  box-shadow: 0px 0px 15px #252525;
  border-radius: 10px;
  
}
</style>
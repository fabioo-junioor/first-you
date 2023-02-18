<template>
  <div id="inicioUser">
    <Alert :texto=alert.texto 
          :tipo=alert.tipo
          class="alert-agend-favor"
          v-if="alert.isAlert"/>
    <CardEstab
      v-for=" card in estabelecimento" :key="card"
      class="card"
      @cancelarAgendamento="cancelarAgendamento"
      @agendar="agendar"
      @adicionarFavorito="adicionarFavorito"
      @removerFavorito="removerFavorito"
      :idEstabelecimento="card.idEstabelecimento"
      :agendado="card.agendado"
      :favorito="card.favorito"
      :nome="card.nome"
      :descricao="card.descricao"
      :imgSrc= "require('../../assets/exemple/img_capa.jpg')"
      :isClosed="card.isClosed"/>
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
import Alert from '../../components/Alert.vue'
import url from '../../config/global.js'

export default{
  name: "InicioUser",
  components: {CardEstab, ModalAgendar, Alert},
  data(){
    return{
      idEstabelecimento: null,
      nomeEscolhido: '',
      idUsuario: localStorage.getItem('idUserLogado'),
      estabelecimento: [        
        {
          idEstabelecimento: null,
          nome: '',
          descricao: '',
          agendado: null,
          favorito: null,
          imgSrc: '',
          isClosed: null
    
        }
      ],
      alert: {
        isAlert: false,
        texto: '',
        tipo: ''

      }
    }
  },
  methods: {
    agendar(idEstabelecimento){
      this.estabelecimento.forEach(e => {
        if(idEstabelecimento === e.idEstabelecimento){
          this.idEstabelecimento = e.idEstabelecimento
          this.nomeEscolhido = e.nome
          this.$root.$emit('bv::show::modal', 'modalAgendar')

        }
      })
    },
    cancelarAgendamento(idEstabelecimento){
      this.resetAlert()
      var dadosAgendamento = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteAgendamento.php?deleteAgendamento=1', {
        method: "POST",
        body: JSON.stringify(dadosAgendamento)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idAgendamento === 1){
            console.log("Cancelou agendamento-> ", idEstabelecimento, dados)
              this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.agendado = null
                    this.alertActive('Agendamento cancelado', 'info')

                  }
              })
            }
        })
          .catch(console.log)

    },
    adicionarFavorito(idEstabelecimento){
      this.resetAlert()
      var dadosFavorito = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?insertFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito === 1){
            console.log("Favorito-> ", idEstabelecimento, dados)
              this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.favorito = dados[0].idFavorito
                    this.alertActive('Like ' + e.nome, 'info')

                  }
              })
              

            }
        })
          .catch(console.log)

    },
    removerFavorito(idEstabelecimento){
      this.resetAlert()
      var dadosFavorito = {idUsuario: this.idUsuario, idEstabelecimento: idEstabelecimento}
      fetch(url+'insertDeleteFavorito.php?deleteFavorito=1', {
        method: "POST",
        body: JSON.stringify(dadosFavorito)
      })
        .then((res) => res.json())
        .then((dados) => {
          if(dados[0].idFavorito === 1){
            console.log("Removeu favorito-> ", idEstabelecimento)
            this.estabelecimento.forEach(e => {
                  if(e.idEstabelecimento == idEstabelecimento){
                    e.favorito = null
                    this.alertActive('Dislike ' + e.nome, 'info')

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
        
        })
          .catch(console.log)

    },
    alertMsg(alertMsg){
      this.resetAlert()
      this.alertActive('Agendado! ', 'info')

    },
    alertActive(msg, tipo){
      this.alert.texto = msg
      this.alert.tipo = tipo
      this.alert.isAlert = true

    },
    resetAlert(){
      this.alert.texto = ''
      this.alert.tipo = ''
      this.alert.isAlert = false

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
  justify-content: center;
  align-items: flex-start;
  
}
#inicioUser .card{
  background-color: #fff;
  box-shadow: 0px 0px 15px #252525;
  border-radius: 10px;
  
}
#inicioUser .alert-agend-favor{
  position: absolute;
  top: .8rem;
  right: .8rem;
  width: 20%;
  z-index: 1;

}
</style>
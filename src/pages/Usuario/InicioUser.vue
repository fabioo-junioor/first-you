<template>
  <div id="inicioUser">
    <CardEstab
      v-for=" card in estabelecimento" :key="card"
      class="card"
      @cancelarAgendamento="cancelarAgendamento"
      @agendar="agendar"
      @addFavorito="addFavorito"
      @removeFavorito="removeFavorito"
      :id="card.id"
      :agendado="card.agendado"
      :favorito="card.favorito"
      :titulo="card.titulo"
      :descricao="card.descricao"/>
  </div>
</template>
<script>
import CardEstab from '../../components/CardEstab.vue'

export default{
  name: "InicioUser",
  components: {CardEstab},
  data(){
    return{
      estabelecimento: [
        {
          id: 1,
          agendado: false,
          favorito: true,
          titulo: "Confraria",
          descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...",
    
        },
        {
          id: 2,
          agendado: false,
          favorito: false,
          titulo: "Gonha",
          descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...",
    
        },
        {
          id: 3,
          agendado: false,
          favorito: false,
          titulo: "Roque",
          descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...",
    
        }
      ]
    }
  },
  methods: {
    cancelarAgendamento(id){
      console.log("Cancelou agendamento-> ", id)
      this.estabelecimento.forEach(e => {
        if(id === e.id){
          e.agendado = !e.agendado

        }
      })
      //this.$router.go(0)
    },
    agendar(id){
      console.log("Agendou-> ", id)
      this.estabelecimento.forEach(e => {
        if(id === e.id){
          e.agendado = !e.agendado

        }
      })
    },
    addFavorito(id){
      console.log("Favoritou-> ", id)
      this.estabelecimento.forEach(e => {
        if(id === e.id){
          e.favorito = !e.favorito

        }
      })
    },
    removeFavorito(id){
      console.log("Removeu favorito-> ", id)
      this.estabelecimento.forEach(e => {
        if(id === e.id){
          e.favorito = !e.favorito

        }
      })
    }
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
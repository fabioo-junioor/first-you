<template>
  <div id="cardEstab">
    <div class="favoritar-estab">
        <b-button @click="addFavorito(id)"
            v-if="!favorito">
            <i class="bx bx-heart" />
        </b-button>
        <b-button @click="removeFavorito(id)"
            v-else>
            <i class="bx bxs-heart" />
        </b-button>
    </div>
    <b-card
      :title="titulo"
      :img-src=imgSrc
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2">
      <b-card-text>{{descricao}}</b-card-text>
      <div>
        <b-button href="#" variant="outline-info">
            <i class="bx bx-info-circle"/>
        </b-button>
        <b-button v-if="!agendado"
        @click="agendar(id)"
        variant="outline-success">Agendar</b-button>
        <b-button v-else
        @click="cancelarAgendamento(id)"
        variant="outline-success">Cancelar Agendamento</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
    name: "CardEstab",
    data(){
        return{

        }
    },
    props: {
        titulo: String,
        descricao: String,
        agendado: Boolean,
        id: Number,
        favorito: Boolean,
        imgSrc: String

    },
    methods: {
        cancelarAgendamento(id){
            this.$emit('cancelarAgendamento', id)

        },
        agendar(id){
            this.$emit('agendar', id)

        },
        addFavorito(id){
            this.$emit('addFavorito', id)

        },
        removeFavorito(id){
            this.$emit('removeFavorito', id)
            
        }
    }
}
</script>
<style>
#cardEstab{
    margin: 1rem .1rem;

}
#cardEstab .card-title{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 1.3rem;
    filter: drop-shadow(2px 2px 2px #252525);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
#cardEstab article{
    border: 1px solid white;
    margin: 5px;

}
#cardEstab .card-text{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: justify;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

}
#cardEstab .card-body{
    padding: .5rem;

}
#cardEstab .card-body div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;

}
#cardEstab .card-body .btn{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .8rem;
    font-weight: bold;
    padding: .5rem 1rem;

}
#cardEstab .card-body div .btn:nth-child(1){
    padding: .5rem 1rem;
    
}
#cardEstab .card-body div .btn i{
    color: #0dcaf0;
    font-size: 1.5rem;
    font-weight: 500;
    
}
#cardEstab .card-body .btn:hover i{
    color: white;
    
}
#cardEstab .favoritar-estab{
    display: flex;
    justify-content: flex-end;

}
#cardEstab .favoritar-estab button{
    margin: .3rem .5rem;
    padding: 0;
    background-color: transparent;
    border: none;

}
#cardEstab .favoritar-estab i{
    font-size: 2rem;
    color: white;
    
}
</style>
<template>
  <div id="cardEstab">
    <div class="favoritar-estab">
        <b-button @click="addFavorito(idEstabelecimento)"
            v-if="!favorito">
            <i class="bx bx-heart" />
        </b-button>
        <b-button @click="removeFavorito(idEstabelecimento)"
            v-else>
            <i class="bx bxs-heart" />
        </b-button>
    </div>
    <b-card
      :title="nome"
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
        <b-button
            @click="agendar(idEstabelecimento)"
            v-if="!agendado"
            variant="outline-success">Agendar         
        </b-button>
        <b-button v-else
            @click="cancelarAgendamento(idEstabelecimento)"
            variant="outline-success">Cancelar Agendamento</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import ModalAgendar from '../components/ModalAgendar.vue'

export default {
    name: "CardEstab",
    components: {ModalAgendar},
    data(){
        return{
            
        }
    },
    props: {
        nome: String,
        descricao: String,
        agendado: Boolean,
        idEstabelecimento: Number,
        favorito: Boolean,
        imgSrc: String

    },
    methods: {
        cancelarAgendamento(idEstabelecimento){
            this.$emit('cancelarAgendamento', idEstabelecimento)

        },
        agendar(idEstabelecimento){
            this.$emit('agendar', idEstabelecimento)

        },
        addFavorito(idEstabelecimento){
            this.$emit('addFavorito', idEstabelecimento)

        },
        removeFavorito(idEstabelecimento){
            this.$emit('removeFavorito', idEstabelecimento)
            
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
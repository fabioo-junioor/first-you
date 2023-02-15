<template>
  <div id="cardEstab">
    <div class="header-status">
        <div class="status-horario">
            <p>{{statusHorario}}</p>
        </div>
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
        statusHorario: String,
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
    color: #252525;
    text-align: center;
    padding: 5px;
    font-size: 1.3rem;
    filter: drop-shadow(0px 0px 3px #868686);
    margin-top: .5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
#cardEstab article{
    border: none;
    margin: 5px;
    box-shadow: 0px 0px 3px #252525 !important;
    overflow: hidden;

}
#cardEstab article img{
    max-height: 50%;
    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
    
}
#cardEstab article img:hover{
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);

}
    #cardEstab .card-text{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #252525;
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
    box-shadow: 0px 0px 5px #252525;

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
#cardEstab .header-status{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
#cardEstab .header-status .status-horario{
    display: flex;
    align-items: center;
    width: 60%;
    
}
#cardEstab .header-status .status-horario p{
    margin: .3rem .5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .9rem;
    font-weight: bold;
    color: #076585;

}
#cardEstab .favoritar-estab button{
    margin: .3rem .5rem;
    padding: 0;
    background-color: transparent;
    border: none;
    width: 40%;

}
#cardEstab .favoritar-estab i{
    font-size: 2rem;
    color: #076585;
    
}
@media only screen and (max-width: 500px){
    #cardEstab{
      max-width: 15rem;
    
    }
    #cardEstab .card-title{
    font-size: 1rem;

    }
    #cardEstab .card-text{
        font-size: .8rem;

    }
    #cardEstab .card-body div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    }
    #cardEstab .card-body .btn{
        font-size: .9rem;
        padding: .5rem;
        margin: .5rem 0;

    }
    #cardEstab .favoritar-estab i{
        font-size: 1.8rem;
           
    }
}
</style>
<template>
    <div id="cardUser" v-if="idUsuario">
        <b-card :header="nome">
            <div>
                <h5>Data</h5>
                <b-card-text>{{data}}</b-card-text>
            </div>
            <div>
                <h5>Pessoas</h5>
                <b-card-text v-if="qtdPessoas">{{qtdPessoas}}</b-card-text>
                <b-card-text v-else>1</b-card-text>
            </div>
            <div>
                <h5>Observação</h5>
                <b-card-text v-if="observacao">{{observacao}}</b-card-text>
                <b-card-text v-else>Sem Observação</b-card-text>
            </div>
        </b-card>
    </div>
    <div v-else>
        <h4>Sem Agendamentos!</h4>
    </div>
</template>
<script>
export default{
    name: "CardUser",
    data(){
        return{

        }
    },
    props: {
        idUsuario: Number,
        nome: String,
        observacao: String,
        data: String,
        qtdPessoas: Number

    }
}
</script>
<style>
#cardUser{
    width: 100%;
    margin: .2rem 0rem;

}
#cardUser .card{
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
#cardUser .card-body div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    margin: auto .3rem;

}
#cardUser .card-body div:nth-child(1){
    width: 25%;
    
}
#cardUser .card-body div:nth-child(2){
    width: 20%;

}
#cardUser .card-body div:nth-child(3){
    width: 55%;

}
#cardUser .card-header{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #076585;
    color: #fff;
    font-size: .9rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto .2rem;
    width: 15%;
    height: 90%;
    border-radius: 10px;

}
#cardUser .card-body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 100%;

}
#cardUser .card-body h5{
    font-size: .9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;

}
#cardUser .card-body p{
    text-align: justify;
    font-size: .8rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
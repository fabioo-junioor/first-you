<template>
    <div id="cardUser">
        <b-card :header="nome" align="center">
            <div>
                <h5>Observação</h5>
                <b-card-text>{{observacao}}</b-card-text>
            </div>
            <div>
                <h5>Data</h5>
                <b-card-text>{{data}}</b-card-text>
            </div>
        </b-card>
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
        data: String

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
    justify-content: center;
    align-items: center;

}
#cardUser div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin: auto .3rem;

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
    width: 20%;
    height: 90%;
    border-radius: 10px;

}
#cardUser .card-body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;

}
#cardUser .card-body h5{
    border-bottom: 1px solid black;
    font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
#cardUser .card-body p{
    text-align: justify;
    font-size: .9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
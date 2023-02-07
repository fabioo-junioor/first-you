<template>
    <div id="loginUser">
        <b-form>
            <div>
                <img src="http://prelocomunicacao.com.br/wp-content/uploads/2021/02/Como-definir-a-minha-persona.jpg" alt="">
            </div>
            <div v-show="logar">
                <b-form-input
                    v-model="form.nome"
                    type="text"
                    placeholder="Informe seu nome: "></b-form-input>
                <b-form-input
                    v-model="form.email"
                    type="email"
                    placeholder="Informe seu email: "></b-form-input>
                    <div class="buttons-login-user">
                        <b-button @click="logarUser()"
                            type="submit"
                            variant="primary">Acessar</b-button>
                        <b-button @click="reset()"
                            type="reset"
                            variant="danger">Resetar</b-button>
                    </div>
            </div>
            <div v-show="!logar">
                <b-form-input
                    v-model="form.nome"
                    type="text"
                    placeholder="Informe seu nome: "></b-form-input>
                <b-form-input
                    v-model="form.email"
                    type="email"
                    placeholder="Informe seu email: "></b-form-input>
                <b-form-input
                    v-model="form.telefone"
                    type="fone"
                    placeholder="Informe seu telefone: "></b-form-input>
                    <div class="buttons-login-user">
                        <b-button @click="cadastrarUser()"
                            type="submit"
                            variant="primary">Cadastrar-se</b-button>
                        <b-button @click="reset()"
                            type="reset"
                            variant="danger">Resetar</b-button>
                    </div>
            </div>
                <div class="link-cadastrar-user">
                    <b-button @click="logar = !logar" v-show="logar">Cadastre-se</b-button>
                    <b-button @click="logar = !logar" v-show="!logar">Fazer Login</b-button>
                </div>
        </b-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
                nome: '',
                email: '',
                telefone: ''

            },
            logar: true

        }
    },
    methods: {
        logarUser(){
            console.log(this.form.nome, this.form.email)

        },
        reset(){
            this.form.nome = ''
            this.form.email = ''
            console.log('resetou')

        },
        cadastrarUser(){
            console.log("cadastrar")
            this.$router.push({path: '/loginUsuario'})

        }
    }
}

</script>
<style>
#loginUser{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

}
#loginUser form{
    background-color: #494949;
    width: 60%;
    padding: 1rem 1rem;
    border-radius: 5px;

}
#loginUser form div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
#loginUser form img{
    height: 100px;
    margin-bottom: .8rem;

}
#loginUser form input{
    margin: 5px 0px;
    border: none;
    height: 3rem;
    border-radius: 5px;
    background-color: #252525;
    color: white;

}
#loginUser form input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(255, 255, 255, 0.685);
    font-size: 1rem;

}
#loginUser div .buttons-login-user{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    width: 100%;

}
#loginUser .buttons-login-user button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 40%;
    height: 3rem;
    border-radius: 5px;
    
}
#loginUser .link-cadastrar-user{
    margin: 1rem 0;

}
#loginUser .link-cadastrar-user button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border: none;
    
}
#loginUser .link-cadastrar-user button:hover{
    background-color: #5f5f5f;

}
</style>
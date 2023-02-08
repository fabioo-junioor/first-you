<template>
    <div id="loginUser">
        <b-form>
            <div>
                <img src="../../assets/icons/add_person.svg">
            </div>
            <div v-show="logar">
                <b-form-input
                    v-model="form.email"
                    type="email"
                    placeholder="Informe seu email: "></b-form-input>
                <b-form-input
                    v-model="form.senha"
                    type="password"
                    placeholder="Informe sua senha: "></b-form-input>
                    <div class="buttons-login-user">
                        <b-button @click="logarUser()"
                            
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
                <b-form-input
                    v-model="form.senha"
                    type="fone"
                    placeholder="Informe sua senha: "></b-form-input>
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
    <Alert :texto=alert.texto :tipo=alert.tipo
        class="alert-user" v-if="alert.isAlert"/>
    </div>
</template>
<script>
import Alert from '../../components/Alert.vue'

export default {
    components: {Alert},
    data(){
        return{
            form: {
                nome: '',
                email: '',
                telefone: '',
                senha: ''

            },
            alert: {
                isAlert: false,
                texto: '',
                tipo: ''

            },
            logar: true,

        }
    },
    methods: {
        logarUser(){
            if(this.form.email === "fabio" && this.form.senha === "555"){
                console.log(this.form.email, this.form.senha)
                this.alert.texto = 'Bem vindo!'
                this.alert.tipo = 'success'
                this.alert.isAlert = true

                //this.$store.commit('navVisible')
                //this.$router.push({name: 'inicioUser'})
                

            }else{
                if(this.form.email === "" || this.form.senha === ""){
                    this.alert.texto = 'Preencha os campos!'
                    this.alert.tipo = 'danger'
                    this.alert.isAlert = true
                    this.resetAlert()

                }else{
                    this.alert.texto = 'Email ou Senha incorretos!'
                    this.alert.tipo = 'danger'
                    this.alert.isAlert = true
                    this.resetAlert()

                }                           
            }
        },
        reset(){
            this.form.nome = ''
            this.form.email = ''
            console.log('resetou')

        },
        cadastrarUser(){
            console.log("cadastrar")
            
        },
        resetAlert(){
            setTimeout(() => {
                this.alert.texto = ''
                this.alert.tipo = ''
                this.alert.isAlert = false

            }, 4000)

        }
    }
}

</script>
<style>
#loginUser{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

}
#loginUser form{
    background-color: #494949;
    width: 40%;
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
    height: 8rem;
    margin-bottom: .8rem;
    filter: drop-shadow(2px 2px 2px #252525)

}
#loginUser form input{
    margin: 5px 0px;
    border: none;
    height: 3rem;
    border-radius: 5px;
    background-color: #252525;
    box-shadow: 3px 3px 0px #1b1b1b;
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
    box-shadow: 3px 3px 0px #252525;
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
#loginUser .alert-user{
    position: absolute;
    top: 10%;
    right: 2%;

}
</style>
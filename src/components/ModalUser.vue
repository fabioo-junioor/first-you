<template>
    <b-modal id="modal-scrollable-user-lg" size="lg" scrollable title="Login Usuário">
      <Alert :texto=alert.texto 
          :tipo=alert.tipo
          class="alert-user"
          v-if="alert.isAlert"/>
      <div id="loginUser">
        <b-form>
            <div>
                <img src="../assets/icons/add_person.svg">
            </div>
            <div v-if="logar">
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
                        <b-button @click="logar = !logar, reset()"
                            variant="secondary">Cadastre-se</b-button>
                    </div>
            </div>
            <div v-else>
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
                    type="number"
                    placeholder="Informe seu telefone: "></b-form-input>
                <b-form-input
                    v-model="form.senha"
                    type="password"
                    placeholder="Informe sua senha: "></b-form-input>
                    <div class="buttons-login-user">
                        <b-button @click="cadastrarUser()"
                            variant="primary">Salvar</b-button>
                        <b-button @click="logar = !logar, reset()"
                            variant="secondary">Fazer login</b-button>
                    </div>
            </div>
                <div class="link-esqueceu-senha-user">
                    <b-button v-if="logar">Esqueceu sua senha?</b-button>
                </div>
                
        </b-form>
    </div>
    </b-modal>
</template>
<script>
import Alert from '../components/Alert.vue'
import url from '../config/global.js'

export default {
    name: "ModalUser",
    components: {Alert},
    data(){
        return{
            form: {
                nome: '',
                email: '',
                telefone: null,
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
            if(this.form.email === "" || this.form.senha === ""){
                this.alert.texto = 'Preencha os campos!'
                this.alert.tipo = 'danger'
                this.alert.isAlert = true
                this.resetAlert()

            }else{
                fetch(url+'authUserEstab.php?buscarUser=1', {
                    method: "POST",
                    body: JSON.stringify(this.form)
                })
                    .then((res) => res.json())
                    .then((dados) => {
                    console.log("-> ", dados)
                    if(dados[0].idUsuario != null){
                        this.alert.texto = 'Bem vindo!'
                        this.alert.tipo = 'success'
                        this.alert.isAlert = true
    
                        this.$store.commit('loginUser', dados)
                        this.$store.commit('navVisible', '2')
                        setTimeout(async () => {
                            await this.$router.push({path: '/inicioUser'})
                            await this.$router.go(0)
    
                        }, 3000)        
                    }else{
                        this.alert.texto = 'Email ou Senha incorretos!'
                        this.alert.tipo = 'danger'
                        this.alert.isAlert = true
                        this.resetAlert()
                               
                    }    
                })
                    .catch(console.log)
                
            }

        },
        cadastrarUser(){
            if(this.form.email === "" || this.form.senha === "" || this.form.nome === "" || this.form.telefone === null){
                this.alert.texto = 'Preencha os campos!'
                this.alert.tipo = 'danger'
                this.alert.isAlert = true
                this.resetAlert()
            
            }else{
                fetch(url+'insertUserEstab.php?insertUser=1', {
                    method: "POST",
                    body: JSON.stringify(this.form)
                })
                    .then((res) => res.json())
                    .then((dados) => {
                    console.log("-> ", dados)
                    if(dados[0].idUsuario == 'success'){
                        this.alert.texto = 'Cadastrado, Efetue o login!'
                        this.alert.tipo = 'success'
                        this.alert.isAlert = true
                        setTimeout(() => {
                            this.reset()
                            this.$router.go(0)

                        }, 3000)        

                    }else{
                        this.alert.texto = 'Email ja cadastrado!'
                        this.alert.tipo = 'danger'
                        this.alert.isAlert = true
                        this.reset()
                        this.resetAlert()

                    }
                })
                    .catch(console.log)

            }            
        },
        resetAlert(){
            setTimeout(() => {
                this.alert.texto = ''
                this.alert.tipo = ''
                this.alert.isAlert = false

            }, 3000)
        },
        reset(){
            this.form.nome = ''
            this.form.email = ''
            this.form.senha = ''
            this.form.telefone = null
            console.log('Resetou')

        }
    }
}

</script>
<style>
.modal-content{
    box-shadow: 1px 1px 5px #252525;
    border-radius: 10px !important;

}
.modal-header h5{
  color: #252525;
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.modal-header .close{
    background-color: rgb(134, 134, 134);
    padding: .2rem .5rem;
    border: none;
    border-radius: 5px;
    color: #fff;

}
.modal-header .close:hover{
    background-color: rgb(90, 90, 90);
    
}
.modal-body{
  padding: 0;
  background-color: #fff !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;

}
.modal-footer button{
  display: none;

}
#loginUser{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

}
#loginUser form{
    background-color: #fff;
    width: 100% !important;
    padding: 1rem 1rem;
    border-radius: 5px;

}
#loginUser form div{
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;

}
#loginUser form img{
    height: 8rem;
    margin-bottom: .8rem;
    filter: drop-shadow(1px 1px 3px #252525)

}
#loginUser form input{
    margin: 5px 0px;
    border: none;
    height: 3.5rem;
    border-radius: 10px;
    background-color: #076585;
    box-shadow: 2px 2px 5px #252525;
    color: #fff;

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
    box-shadow: 2px 2px 5px #252525;
    width: 40%;
    height: 3rem;
    border-radius: 10px;
    
}
#loginUser .link-esqueceu-senha-user{
    margin: 1rem 0;

}
#loginUser .link-esqueceu-senha-user button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .8rem;
    padding: .8rem 2rem;
    color: #252525;
    font-weight: bold;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    
}
#loginUser .link-esqueceu-senha-user button:hover{
    color: red;
    font-weight: bold;

}
</style>

<template>
    <b-modal id="modal-scrollable-estab-lg" size="xl" scrollable title="Login Estabelecimento">
      <Alert :texto=alert.texto 
          :tipo=alert.tipo
          class="alert-estab"
          v-if="alert.isAlert"/>
      <div id="loginEstab">
        <b-form>
            <div>
                <img src="../assets/icons/add_person.svg">
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
                    <div class="buttons-login-estab">
                        <b-button @click="logarEstab()"
                            variant="primary">Acessar</b-button>
                        <b-button @click="logar = !logar"
                            variant="secondary">Cadastre-se</b-button>
                    </div>
            </div>
            <div v-show="!logar">
                <b-form-input
                    v-model="form.nomeEstab"
                    type="text"
                    placeholder="Informe o nome do estabelecimento: "></b-form-input>
                <b-form-input
                    v-model="form.email"
                    type="email"
                    placeholder="Informe o email: "></b-form-input>
                <b-form-input
                    v-model="form.senha"
                    type="password"
                    placeholder="Informe a senha: "></b-form-input>
                <b-form-input
                    v-model="form.telefone"
                    type="number"
                    placeholder="Informe o telefone: "></b-form-input>
                <b-form-input
                    v-model="form.nomeResponsavel"
                    type="text"
                    placeholder="Informe o nome do responsavel: "></b-form-input>
                    <div class="buttons-login-estab">
                        <b-button @click="cadastrarEstab()"
                            variant="primary">Salvar</b-button>
                        <b-button @click="logar = !logar, reset()"
                            variant="secondary">Fazer Login</b-button>
                    </div>
            </div>
                <div class="link-esqueceu-senha-estab">
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
    name: "ModalEstab",
    components: {Alert},
    data(){
        return{
            form: {
                nomeEstab: '',
                email: '',
                senha: '',
                telefone: null,
                nomeResponsavel: ''

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
        logarEstab(){
            if(this.form.email == "" || this.form.senha == ""){
                this.alert.texto = 'Preencha os campos!'
                this.alert.tipo = 'danger'
                this.alert.isAlert = true
                this.resetAlert()

            }else{
                fetch(url+'authUserEstab.php?buscarEstabelecimento=1', {
                    method: "POST",
                    body: JSON.stringify(this.form)
                })
                    .then((res) => res.json())
                    .then((dados) => {
                    console.log("-> ", dados)
                    if(dados[0].idEstabelecimento != null){
                        this.alert.texto = 'Bem vindo!'
                        this.alert.tipo = 'success'
                        this.alert.isAlert = true
    
                        this.$store.commit('loginEstab', dados)
                        this.$store.commit('navVisible', '3')
                        setTimeout(async () => {
                            await this.$router.push({path: '/inicioEstab'})
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
        cadastrarEstab(){
            if(this.form.nomeEstab == "" || this.form.email == "" || this.form.senha == "" || this.form.telefone == null || this.form.nomeResponsavel == ""){
                this.alert.texto = 'Preencha os campos!'
                this.alert.tipo = 'danger'
                this.alert.isAlert = true
                this.resetAlert()

            }else{
                fetch(url+'insertUserEstab.php?insertEstabelecimento=1', {
                    method: "POST",
                    body: JSON.stringify(this.form)
                })
                    .then((res) => res.json())
                    .then((dados) => {
                    console.log("-> ", dados, this.form)
                    if(dados[0].idEstabelecimento == 'success'){
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
        reset(){
            this.form.nomeResponsavel = ''
            this.form.nomeEstab = ''
            this.form.email = ''
            this.form.telefone = null
            this.form.senha = ''
            console.log('resetou')

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
.modal-content{
    box-shadow: 1px 1px 5px #252525;
    border-radius: 10px !important;

}
.modal-header h5{
  color: #252525;
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

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
#loginEstab{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

}
#loginEstab form{
    background-color: #fff;
    width: 100% !important;
    padding: 1rem 1rem;
    border-radius: 5px;

}
#loginEstab form div{
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;

}
#loginEstab form img{
    height: 8rem;
    margin-bottom: .8rem;
    filter: drop-shadow(1px 1px 3px #252525)

}
#loginEstab form input{
    margin: 5px 0px;
    border: none;
    height: 3.5rem;
    border-radius: 10px;
    background-color: #076585;
    box-shadow: 2px 2px 5px #252525;
    color: #fff;

}
#loginEstab form input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(255, 255, 255, 0.685);
    font-size: 1rem;

}
#loginEstab div .buttons-login-estab{
    display: flex !important;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    width: 100%;

}
#loginEstab .buttons-login-estab button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    box-shadow: 2px 2px 5px #252525;
    width: 40%;
    height: 3rem;
    border-radius: 10px;
    
}
#loginEstab .link-esqueceu-senha-estab{
    margin: 1rem 0;

}
#loginEstab .link-esqueceu-senha-estab button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .8rem;
    padding: .8rem 2rem;
    color: #252525;
    font-weight: bold;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    
}
#loginEstab .link-esqueceu-senha-estab button:hover{
    color: red;
    font-weight: bold;

}
</style>

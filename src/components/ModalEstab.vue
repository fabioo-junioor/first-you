<template>
    <b-modal id="modal-scrollable-estab-xl" size="xl" scrollable title="Login Estabelecimento">
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
                        <b-button @click="reset()"
                            type="reset"
                            variant="danger">Resetar</b-button>
                    </div>
            </div>
            <div v-show="!logar">
                <b-form-input
                    v-model="form.nomeResponsavel"
                    type="text"
                    placeholder="Informe o nome do responsavel: "></b-form-input>
                <b-form-input
                    v-model="form.nomeEstab"
                    type="text"
                    placeholder="Informe o nome do estabelecimento: "></b-form-input>
                <b-form-input
                    v-model="form.email"
                    type="email"
                    placeholder="Informe o email: "></b-form-input>
                <b-form-input
                    v-model="form.telefone"
                    type="fone"
                    placeholder="Informe o telefone: "></b-form-input>
                <b-form-input
                    v-model="form.senha"
                    type="password"
                    placeholder="Informe a senha: "></b-form-input>
                    <div class="buttons-login-estab">
                        <b-button @click="cadastrarEstab()"
                            type="submit"
                            variant="primary">Cadastrar-se</b-button>
                        <b-button @click="reset()"
                            type="reset"
                            variant="danger">Resetar</b-button>
                    </div>
            </div>
                <div class="link-cadastrar-estab">
                    <b-button @click="logar = !logar" v-show="logar">Cadastre-se</b-button>
                    <b-button @click="logar = !logar" v-show="!logar">Fazer Login</b-button>
                </div>
                
        </b-form>
    </div>
    </b-modal>
</template>
<script>
import Alert from '../components/Alert.vue'

export default {
    name: "ModalEstab",
    components: {Alert},
    data(){
        return{
            form: {
                nomeResponsavel: '',
                nomeEstab: '',
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
        logarEstab(){
            if(this.form.email === "con" && this.form.senha === "1"){
                console.log(this.form.email, this.form.senha)
                this.alert.texto = 'Bem vindo!'
                this.alert.tipo = 'success'
                this.alert.isAlert = true

                this.$store.commit('navVisible', '3')
                this.$router.push({path: '/inicioEstab'})
                setTimeout(() => {
                    this.$router.go(0)

                }, 3000)
                

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
            this.form.nomeResponsavel = ''
            this.form.nomeEstab = ''
            this.form.email = ''
            this.form.telefone = ''
            this.form.senha = ''
            console.log('resetou')

        },
        cadastrarEstab(){
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
.modal-header h5{
  color: #494949;
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.modal-body{
  padding: 0;
  background-color: #494949;
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
    background-color: #494949;
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
    filter: drop-shadow(2px 2px 2px #252525)

}
#loginEstab form input{
    margin: 5px 0px;
    border: none;
    height: 3rem;
    border-radius: 5px;
    background-color: #252525;
    box-shadow: 3px 3px 0px #1b1b1b;
    color: white;

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
    box-shadow: 3px 3px 0px #252525;
    width: 40%;
    height: 3rem;
    border-radius: 5px;
    
}
#loginEstab .link-cadastrar-estab{
    margin: 1rem 0;

}
#loginEstab .link-cadastrar-estab button{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border: none;
    
}
#loginEstab .link-cadastrar-estab button:hover{
    background-color: #5f5f5f;

}
</style>

<template>
  <b-modal id="modalAgendar" size="lg" scrollable title="Agendar">
    <h4 class="legenda">Agendar em: </h4>
    <p class="nomeEstab">{{ nomeEscolhido }}</p>
    <div id="formAgendar">
      <b-form>
        <div>
          <b-form-input
            v-model="form.qtdPessoas"
            type="number"
            placeholder="Quantas pessoas?"></b-form-input>
            <b-form-textarea
                v-model="form.observacao"
                id="textarea-large"
                size="lg"
                placeholder="Observações"></b-form-textarea>
          <div class="buttons-agendar">
            <b-button @click="agendar(idEstabelecimento, idUsuario)" variant="primary">Agendar</b-button>
            <b-button @click="reset()" type="reset" variant="danger"
              >Resetar</b-button
            >
          </div>
        </div>
      </b-form>
    </div>
  </b-modal>
</template>
<script>
import url from '../config/global.js'

export default {
  name: "ModalAgendar",
  props: {
    idEstabelecimento: Number,
    nomeEscolhido: String,
    idUsuario: Number

  },
  data() {
    return {
      form: {
        qtdPessoas: null,
        observacao: '',
        
      }
    }
  },
  methods: {
    agendar(idEstabelecimento, idUsuario) {
      var dadosAgendamento = {
        idUsuario: idUsuario, 
        idEstabelecimento: idEstabelecimento,
        qtdPessoas: this.form.qtdPessoas,
        observacao: this.form.observacao

        }
        fetch(url+'insertDeleteAgendamento.php?insertAgendamento=1', {
          method: "POST",
          body: JSON.stringify(dadosAgendamento)
        })
          .then((res) => res.json())
          .then((dados) => {
            if(dados[0].idAgendamento === 1){
              console.log("Agendado em -> ", idEstabelecimento, dados)
                this.alertMsg(true)
                setTimeout(async () => {
                  this.$router.go(0)

              }, 3000) 
            }
          })
            .catch(console.log)

    },
    alertMsg(alertMsg){
      this.$emit('alertMsg', alertMsg)

    },
    reset() {
      this.form.qtdPessoas = null;
      this.form.observacao = "";
      console.log("Resetou");

    }
  }
}
</script>
<style>
.modal-header h5 {
  color: #494949;
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.modal-body {
  padding: 0;
  background-color: #fff;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;

}
.modal-body .legenda, .nomeEstab{
    color: #252525;

}
.modal-footer button {
  display: none;

}
#formAgendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;

}
#formAgendar form {
  background-color: #fff;
  width: 100% !important;
  padding: 1rem 1rem;
  border-radius: 5px;

}
#formAgendar form div {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;

}
#formAgendar form img {
  height: 8rem;
  margin-bottom: 0.8rem;
  filter: drop-shadow(2px 2px 2px #252525);

}
#formAgendar form input {
  margin: 5px 0px;
  border: none;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #076585;
  box-shadow: 0px 0px 5px #252525;
  color: white;

}
#formAgendar form textarea {
  margin: 5px 0px;
  border: none;
  height: 10rem;
  border-radius: 10px;
  background-color: #076585;
  box-shadow: 0px 0px 5px #252525;
  color: white;
  font-size: 1rem;

}
#formAgendar form input::placeholder {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgba(255, 255, 255, 0.685);
  font-size: 1rem;

}
#formAgendar form textarea::placeholder {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgba(255, 255, 255, 0.685);
  font-size: 1rem;

}
#formAgendar div .buttons-agendar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  width: 100%;

}
#formAgendar .buttons-agendar button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 2px 2px 5px #252525;
  width: 40%;
  height: 3rem;
  border-radius: 10px;

}
</style>

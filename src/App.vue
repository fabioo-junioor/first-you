<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Cadastrado com Sucesso</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="5px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 3,
        dismissCountDown: 0,
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    },
    created() {
      setTimeout(() => {
        this.showAlert()
        
      }, 2000)
    },
  }
</script>
<style>
.alert{
  position: absolute;
  right: 10px;
  top: 10px;
  
}
.alert .close{
  display: none;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  margin: 0;
  padding: 0;

}
</style>
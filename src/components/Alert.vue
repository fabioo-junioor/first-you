<template>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      :variant=tipo
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ texto }}</p>
      <b-progress
        :variant=tipo
        :max="dismissSecs"
        :value="dismissCountDown"
        height="5px"
      ></b-progress>
    </b-alert>
</template>
<script>
  export default {
    data() {
      return {
        dismissSecs: 3,
        dismissCountDown: 0,
      }
    },
    props:{
      texto: String,
      tipo: String
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
     this.showAlert()
        
    }
  }
</script>
<style>
.alert{
  width: 60%;

}
.alert .close{
  display: none;
  border: none;
  margin: 0;
  padding: 0;

}
.alert p{
  font-size: .9rem;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
</style>
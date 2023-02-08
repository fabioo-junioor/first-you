import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            isMenuTopVisible: true,

        }
    },
    mutations: {
        navVisible(){
            this.state.isMenuTopVisible = !this.state.isMenuTopVisible
            console.log("---")

        }
    }
})

export default store
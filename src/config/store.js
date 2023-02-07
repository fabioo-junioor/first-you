import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            isMenuTopVisible: true,
            isMenuLeftVisible: false

        }
    },
    mutations: {
        menuTopState(){
            this.state.isMenuTopVisible = false

        }
    }
})

export default store
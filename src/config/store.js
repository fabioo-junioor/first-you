import { createStore } from 'vuex'

const store = createStore({
    state: {
        typeLogin: localStorage.getItem('typeLogin'),
        buttonsInOut: localStorage.getItem('typeLogin')
        
    },
    mutations: {
        navVisible(state, type){
            if(type === '2'){
                localStorage.setItem('typeLogin', '2')
                state.typeLogin = '2'
                state.buttonsInOut = '2'
                //console.log("---> ", state.typeLogin, state.buttonsInOut)
                
            }else if(type === '1'){
                localStorage.setItem('typeLogin', '1')
                state.typeLogin = '1'
                state.buttonsInOut = '1'
                //console.log("-> ", state.typeLogin, state.buttonsInOut)

            }else if(type === '3'){
                localStorage.setItem('typeLogin', '3')
                state.typeLogin = '3'
                state.buttonsInOut = '3'
                
            }
        }
    }
})

export default store
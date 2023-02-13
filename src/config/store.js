import { createStore } from 'vuex'

const store = createStore({
    state: {
        typeLogin: localStorage.getItem('typeLogin'),
        buttonsInOut: localStorage.getItem('typeLogin'),
        
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
        },
        loginUser(state, dadosUser){
            localStorage.setItem('idUserLogado', dadosUser[0].idUsuario)
            localStorage.setItem('nomeUserLogado', dadosUser[0].nome)
            console.log('login ')
    
        },
        logoutUser(state){
            localStorage.removeItem('idUserLogado')
            localStorage.removeItem('nomeUserLogado')
            console.log('logout ')

        }
    }
})

export default store
import { createStore } from 'vuex'

const store = createStore({
    state: {
        
    },
    mutations: {
        navVisible(state, type){
            if(type === '2'){
                localStorage.setItem('typeLogin', '2')
                //console.log("---> ", state.typeLogin, state.buttonsInOut)
                
            }else if(type === '1'){
                localStorage.setItem('typeLogin', '1')
                //console.log("-> ", state.typeLogin, state.buttonsInOut)

            }else if(type === '3'){
                localStorage.setItem('typeLogin', '3')
                
            }
        },
        async loginUser(state, dadosUser){
            await localStorage.setItem('idUserLogado', dadosUser[0].idUsuario)
            await localStorage.setItem('nomeUserLogado', dadosUser[0].nome)
            console.log('login ')
    
        },
        async logoutUser(state){
            await localStorage.removeItem('idUserLogado')
            await localStorage.removeItem('nomeUserLogado')
            await localStorage.removeItem('typeLogin')
            console.log('logout ')

        }
    }
})

export default store
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
            console.log('login user')
    
        },
        async loginEstab(state, dadosEstab){
            await localStorage.setItem('idEstabLogado', dadosEstab[0].idEstabelecimento)
            await localStorage.setItem('nomeEstabLogado', dadosEstab[0].nome)
            console.log('login estab')
    
        },
        async logoutUser(state){
            await localStorage.removeItem('idUserLogado')
            await localStorage.removeItem('nomeUserLogado')
            await localStorage.removeItem('typeLogin')
            console.log('logout user')

        },
        async logoutEstab(state){
            await localStorage.removeItem('idEstabLogado')
            await localStorage.removeItem('nomeEstabLogado')
            await localStorage.removeItem('typeLogin')
            console.log('logout estab')

        }
    }
})

export default store
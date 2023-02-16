import { createRouter, createWebHistory } from "vue-router"
import { isSignedIn } from './auth'

import Sobre from '../pages/Apresentacao/Sobre.vue'

import InicioEstab from '../pages/Estabelecimento/InicioEstab.vue'
import Configuracoes from '../pages/Estabelecimento/Configuracoes.vue'

import InicioUser from '../pages/Usuario/InicioUser.vue'

const routes = [
    {
        path: "/sobre",
        name: "sobre",
        component: Sobre
    },
    {
        path: "/inicioEstab",
        name: "inicioEstab",
        component: InicioEstab
    },
    {
        path: "/configuracoes",
        name: "configuracoes",
        component: Configuracoes,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('idUserLogado') == '1' ? true : false
            if(idUserLogado){
                next()
                return

            }
            next('/*')

        }
    },
    {
        path: "/inicioUser",
        name: "inicioUser",
        component: InicioUser,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('idUserLogado') == '1' ? true : false
            console.log(idUserLogado)
            if(idUserLogado){
                next()
                return

            }
            next('/*')

        }
    },
    {
        path: '/*',
        name: 'app',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
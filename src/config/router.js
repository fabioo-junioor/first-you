import { createRouter, createWebHistory } from "vue-router"

import InicioApre from '../pages/Apresentacao/InicioApre.vue'
import Sobre from '../pages/Apresentacao/Sobre.vue'

import InicioEstab from '../pages/Estabelecimento/InicioEstab.vue'
import ConfigEstab from '../pages/Estabelecimento/Configuracoes.vue'
import Dashboard from '../pages/Estabelecimento/Dashboard.vue'

import InicioUser from '../pages/Usuario/InicioUser.vue'
import ConfigUser from '../pages/Usuario/Configuracoes.vue'

const routes = [
    {
        path: "/inicioApre",
        name: "inicioApre",
        component: InicioApre,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '1' || localStorage.getItem('typeLogin') == null ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)
            
        }
    },
    {
        path: "/sobre",
        name: "sobre",
        component: Sobre,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '1' || localStorage.getItem('typeLogin') == null ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)
            
        }
    },
    {
        path: "/inicioEstab",
        name: "inicioEstab",
        component: InicioEstab,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '3' ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)

        }
    },
    {
        path: "/configEstab",
        name: "configEstab",
        component: ConfigEstab,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '3' ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)

        }
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '3' ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)

        }
    },
    {
        path: "/inicioUser",
        name: "inicioUser",
        component: InicioUser,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '2' ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)

        }
    },
    {
        path: "/configUser",
        name: "configUser",
        component: ConfigUser,
        beforeEnter: (_, __, next) => {
            const idUserLogado = localStorage.getItem('typeLogin') == '2' ? true : false
            if(idUserLogado){
                next()
                return

            }
            history.go(-1)

        }
    },
    {
        path: '/*',
        redirect: '/'
    },
    {
        path: '/',
        redirect: '/inicioApre'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
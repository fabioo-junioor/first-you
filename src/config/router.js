import { createRouter, createWebHistory } from "vue-router"

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
        component: Configuracoes
    },
    {
        path: "/inicioUser",
        name: "inicioUser",
        component: InicioUser
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
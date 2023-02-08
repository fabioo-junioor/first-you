import { createRouter, createWebHistory } from "vue-router"

import Sobre from '../pages/Apresentacao/Sobre.vue'
import LoginUsuario from '../pages/Apresentacao/LoginUsuario.vue'

import LoginEstabelecimento from '../pages/Estabelecimento/LoginEstabelecimento.vue'
import Configuracoes from '../pages/Estabelecimento/Configuracoes.vue'

import InicioUser from '../pages/Usuario/InicioUser.vue'

const routes = [
    {
        path: "/sobre",
        name: "sobre",
        component: Sobre
    },
    {
        path: "/loginUsuario",
        name: "loginUsuario",
        component: LoginUsuario
    },
    {
        path: "/loginEstabelecimento",
        name: "loginEstabelecimento",
        component: LoginEstabelecimento
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
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
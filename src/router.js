import { createRouter, createWebHistory } from "vue-router"

import Sobre from './pages/Apresentacao/Sobre.vue'
import Login from './pages/Apresentacao/Login.vue'

import Configuracoes from './pages/Estabelecimento/Configuracoes.vue'

const routes = [
    {
        path: "/sobre",
        name: "sobre",
        component: Sobre
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/configuracoes",
        name: "configuracoes",
        component: Configuracoes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
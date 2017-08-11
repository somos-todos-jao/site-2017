import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
    return require(`components/${component}.vue`)
}

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                content: load('templates/home')
            }
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            components: {
                content: load('templates/cadastro')
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

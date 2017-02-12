/******************************************************************************
* SOMOS TODOS JAO 2017 - LUIGUI DELYER | MEU NOME É JAO @ S1X                 *
* GITHUB = https://github.com/somos-todos-jao/site-2017                       *
* VUE COMPONENTS WRITING USING ATOMIC DESIGN CONCEPT                          *
* SPECIFIC PARTS OF THE JS CODE ARE INSIDE THE COMPONENTS                     *
******************************************************************************/

import Vue from 'vue'
import router from './router'
import store from './store'
import SomosTodosJao from './components/stj'

new Vue({
    router,
    store,
    render: h => h(SomosTodosJao)
}).$mount('#app-jao')

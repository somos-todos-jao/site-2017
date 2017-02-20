import axios from 'axios'

export const requester = axios.create({
    baseURL: 'http://www.somostodosjao.com.br/api',
    timeout: 1000
})

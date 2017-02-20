import axios from 'axios'

export const requester = axios.create({
    // baseURL: 'http://www.somostodosjao.com.br/api',
    baseURL: 'http://localhost/tekoa/back-end/tekoa-php-slim/src/public',
    timeout: 1000
})

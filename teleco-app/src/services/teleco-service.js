import http from './base-api-service'

//auth
const login = (username, password) => https.post('/react-test.apps-dev.tid.es/auth', { username, password })







const service = {
    login,
    
}

export default service
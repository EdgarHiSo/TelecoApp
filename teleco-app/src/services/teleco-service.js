import https from './base-api-service'

//auth
const login = (username, password) => https.post('/react-test.apps-dev.tid.es/auth', { username, password })

const posts = (token) => https.get('/react-test.apps-dev.tid.es/', { headers: { 'Authorization': `Bearer ${token}` } })





const service = {
    login,
    posts
}

export default service


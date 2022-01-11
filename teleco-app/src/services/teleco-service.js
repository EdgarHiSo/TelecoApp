import https from './base-api-service'

//auth
const login = (username, password) => https.post('/auth', { username, password }, { headers: {"Content-Type": "application/json"} })

const posts = (token) => https.get('/posts', { headers: { 'Authorization': `Bearer ${token}`, "Content-Type": "application/json" } })





const service = {
    login,
    posts
}

export default service


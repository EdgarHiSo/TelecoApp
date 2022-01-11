import https from './base-api-service'

//auth
const login = (username, password) => https.post('/auth', { username, password }, { headers: {"Content-Type": "application/json"} })

const posts = () => https.get('/posts', { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}`, "Content-Type": "application/json" } })


const service = {
    login,
    posts
}

export default service


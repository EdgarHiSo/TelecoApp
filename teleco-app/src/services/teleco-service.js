import https from './base-api-service'

//auth
const login = (username, password) => https.post('/auth', { username, password })

const posts = () => https.get('/posts', { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}`} })

const like = (id) => https.post(`/posts/${id}/like`, {}, { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}`} })

const profile = (id) => https.get(`/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}` } })

const service = {
    login,
    posts,
    profile,
    like
}

export default service


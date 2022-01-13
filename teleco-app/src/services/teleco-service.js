import https from './base-api-service'
//bGl2aW5nYXBw
//auth
const login = (username, password) => https.post('/auth', { username, password })

const posts = () => https.get('/posts', { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}` } })

const like = (id) => https.post(`/posts/${id}/like`, {}, { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}` } })

const profile = () => https.get('/profile', { headers: { 'Authorization': `Bearer ${localStorage.getItem('edgar_token')}` } })

const service = {
    login,
    posts,
    profile,
    like
}

export default service


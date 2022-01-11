import React from 'react'
import service from '../services/teleco-service'
import { useNavigate } from 'react-router-dom'
export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {

    const navigate = useNavigate()

    function login(username, password) {
        service.login(username, password)
            .then(token => {
                localStorage.setItem('token', token)
                //navigate('/profile')
            })
            .catch(err => console.error(err))
    }

    function logout() {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const value = {
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
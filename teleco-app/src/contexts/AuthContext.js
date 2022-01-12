import React from 'react'
import service from '../services/teleco-service'
import { useNavigate } from 'react-router-dom'
export const AuthContext = React.createContext()
//https://github.com/IronPTSolutions/react-contacts
function AuthContextProvider({ children }) {

    const navigate = useNavigate()

    function login(username, password) {
        return service.login(username, password)
            .then(data => {
                localStorage.setItem('edgar_token', data["access_token"])
                navigate('/posts')
            })
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
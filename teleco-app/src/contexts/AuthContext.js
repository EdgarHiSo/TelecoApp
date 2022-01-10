import React, { useEffect, useState } from 'react'
import service from '../services/teleco-service'
import { useHistory } from 'react-router';

export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {
    
    const history = useHistory()

    function login(email, password) {
        service.login(email, password)
            .then(token => {
                localStorage.setItem('token', token)
                history.push('/profile')
            })
            .catch(err => console.error(err))
    }

    function logout() {
        localStorage.removeItem('token')
        history.push('/login')
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
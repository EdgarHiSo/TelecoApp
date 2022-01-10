import service from '../services/base-api-services'
import React, { useState } from 'react' //imrs
import { AuthContext } from '../../contexts/Authcontext'
import { Usecontext } from 'react'

function Login() {
    const auth = useContext(AuthContext)
    const [ data, setData ] = useState({
        username: '',
        password: ''
    })
}

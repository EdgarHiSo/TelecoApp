import React, { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

function Login() {
    const auth = useContext(AuthContext)
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(event) {
        event.preventDefault()
        auth.login(data.username, data.password)
    }

    function handleChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div id="login">
            <h1>Welcome to PostMania</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <inp
                    name='username'
                    type='email'
                    className='form-control'
                    aria-describedby='emailHelp'
                    onChange={handleChange}
                    value={data.username}
                    />
                </div>
            </form>
        </div>
    )
}
export default Login
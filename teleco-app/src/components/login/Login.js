import React, { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import './Login.css'
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
                    <label className='form-label'>Email</label>
                    <input
                        name='username'
                        
                        className='form-control'
                        onChange={handleChange}
                        value={data.username}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input 
                        name='password'
                        type='password'
                        className='form-control'
                        onChange={handleChange}
                        value={data.password}
                    />
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login
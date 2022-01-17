import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'

//bGl2aW5nYXBw
function Login() {
    const auth = useContext(AuthContext)

    const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'all' });

    const onLoginFormSubmit = data => {
        auth.login(data.username, data.password)
            .catch(error => {
                if (error.response?.status === 400) {
                    setError('username', { type: 'manual', message: 'invalid email or password' })
                } else {
                    setError('login', { type: 'manual', message: 'an error ocurred ...' })
                }
            })
    }
    
    return (
        <div id='login'>
            <div className='col mx-auto'>

                <form className='mt-3 mb-3' onSubmit={handleSubmit(onLoginFormSubmit)}>
                    {errors.login && <div className="alert alert-danger">{errors.login?.message}</div>}

                    <div className='mb-2'>
                        <label className='form-label'>Email</label>
                        <input type='text' className={`form-control ${errors.username ? 'is-invalid' : ''} `}  {...register('username', { required: 'Username is required' })} />
                        <div className='invalid-feedback'>{errors.username?.message} </div>
                    </div>

                    <div className='mb-2'>
                        <label className='form-label'>Password</label>
                        <input type='password' className='form-control' {...register('password', { required: 'Username is required' })} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login






/* function Login() {
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
export default Login */
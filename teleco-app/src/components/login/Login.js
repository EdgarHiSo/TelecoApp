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
                const { message, errors } = error.response?.data || error;
                if (errors) {
                    Object.keys(errors).forEach(input => {
                        setError(input, { type: 'manual', message: errors[input] })
                    })
                } else {
                    setError('email', { type: 'manual', message: message })
                }
            })

    }
    return (
        <div id='login'>
            <div className='col mx-auto'>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Navbar</span>
                    </div>
                </nav>
                <form className='mt-3 mb-3' onSubmit={handleSubmit(onLoginFormSubmit)}>
                    {errors.email && <div className="alert alert-danger">Invalid email or password</div>}

                    <div className='mb-2'>
                        <label className='form-label'>Email</label>
                        <input type='text' className='form-control' {...register('username', { required: 'Username is required' })} />
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

import './NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    function handleLogOut() {
        localStorage.removeItem('edgar_token')
        navigate('/login')
    }

    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid navhight">
                <span className="navbar-brand mx-3 h1 "><i className="fas fa-bolt" onClick={() => navigate('/posts')}></i> Three pics</span>
                <div className='mx-2'>
                    <i className="fas fa-user mx-2" onClick={() => navigate("/profile")}></i>
                    <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
                </div>
            </div>
        </nav>
    )
}
export default NavBar

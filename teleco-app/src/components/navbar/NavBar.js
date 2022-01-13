
import './NavBar.css'
import service from '../../services/teleco-service';
import { useNavigate } from 'react-router-dom';

function NavBar(id) {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid navhight">
                <span className="navbar-brand mx-3 h1 "><i className="fas fa-bolt"></i> Three pics</span>
                <i className="fas fa-user" onClick={() => navigate("/profile")}></i>
            </div>
        </nav>
    )
}
export default NavBar

//
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="context">useContext</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} to="/home-page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}  to="/about-page">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} to="/login-page">Login</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;
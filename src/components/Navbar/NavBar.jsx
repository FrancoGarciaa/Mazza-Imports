import "./navbar.css"
import logo from "../../assets/logo.png"
import CarritoView from "./CardWidget"
import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <Link to="/">
        <img src={logo} alt="" className="logo"/>
        </Link>
        <div className="container-fluid navbar">
        <a className="navbar-brand container2" href="#">
            <Link to="/" className="container2">Productos</Link>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav container">
            <li className="nav-item navbar">
                <a className="nav-link container2" aria-current="page" href="#">
                    <Link to="/category/electronicos" className="container2">Electronicos</Link>
                    </a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">
                    <Link to="/category/vestimentas" className="container2">Vestimenta</Link>
                    </a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">
                    <Link to="/category/perfumes" className="container2">Perfumes</Link>
                </a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">
                    <Link to="/category/promociones" className="container2">Promociones</Link>
                </a>
            </li>
            </ul>
        </div>
        </div>
        <CarritoView />
    </nav>
    )
}

export default NavBar
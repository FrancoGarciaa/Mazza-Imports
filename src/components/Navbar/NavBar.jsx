import "./navbar.css"
import logo from "../../assets/logo.png"
import CarritoView from "./CardWidget"


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <img src={logo} alt="" className="logo"/>
        <div className="container-fluid navbar">
        <a className="navbar-brand container2" href="#">Productos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav container">
            <li className="nav-item navbar">
                <a className="nav-link container2" aria-current="page" href="#">Electronicos</a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">Vestimenta</a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">Perfumes</a>
            </li>
            <li className="nav-item navbar">
                <a className="nav-link container2" href="#">Promociones</a>
            </li>
            </ul>
        </div>
        </div>
        <CarritoView />
    </nav>
    )
}

export default NavBar
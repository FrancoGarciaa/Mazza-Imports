import "./navbar.css"
import Carrito from "../carrito/carrito"
import logo from "../../assets/logo.png"

const NavBar = () => {

    return (
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>

            <ul className="container">
                <li><a href="" className="container2">Electronicos</a></li>
                <li><a href="" className="container2">Vestimenta</a></li>
                <li><a href="" className="container2">Perfumes</a></li>
                <li><a href="" className="container2">Promociones</a></li>
            </ul>

            <Carrito />
        </nav>
    )
}

export default NavBar
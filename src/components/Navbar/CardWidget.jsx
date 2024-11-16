import "../Navbar/navbar.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";


const CarritoView = () => {

    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

return (
    <Link to="/cart" className="container2">
    <FaCartShopping className="carrito" style={ quantity === 0 ? { color: "black" } : {color: "white"} }/>
    <p className="carrito" style={ quantity === 0 ? { color: "black" } : {color: "white", textDecoration: "underline"} }>{ quantity >= 0 && quantity }</p>
</Link> 
)
}

export default CarritoView

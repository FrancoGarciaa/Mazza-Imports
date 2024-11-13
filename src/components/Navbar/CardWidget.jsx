import "../Navbar/navbar.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import carritoFoto from "../../assets/carrito2.png"
import { Link } from "react-router-dom"


const CarritoView = () => {

    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

return (
    <Link to="/cart" className="container2">
    <img src={carritoFoto} width={100} alt="" className="carrito" style={ quantity === 0 ? { color: "black" } : {color: "white"} }/>
    <p className="carrito">{ quantity >= 0 && quantity }</p>
</Link> 
)
}

export default CarritoView
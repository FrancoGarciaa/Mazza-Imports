import carritoFoto from "../../assets/carrito2.png"
import "./carrito.css"

const Carrito = () => {
    return(
        <div className="carrito">
            <img src={carritoFoto} alt="" className="carrito"/>
            <p className="numero-carrito">1</p>
        </div>
    )
}

export default Carrito
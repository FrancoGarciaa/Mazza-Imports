import "../Navbar/navbar.css"
import carritoFoto from "../../assets/carrito2.png"

const CarritoView = () => {
return (
    <div className="container2">
    <img src={carritoFoto} width={100} alt="" className="carrito"/>
    <p className="carrito">1</p>
</div>
)
}

export default CarritoView
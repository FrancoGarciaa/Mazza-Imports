import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)


    if (cart.length === 0){
        return(
            <div className="cart-vacio">
                <h3>No hay productos en el carrito 😢</h3>
                <Link to="/" className="return-home">Volver al inicio</Link>
            </div>
        )
    } 

    return (
    <div>
        <h2>Productos En el carrito</h2>
        {
            cart.map((productCart)=> (
                <div key={productCart.id} className="cart-products">
                    <img src={productCart.image[0]} className="image-cart" alt="" />
                    <div className="cart-text">
                    <h3>Titulo</h3>
                    <p>{productCart.name} </p>
                    </div>
                    <div className="cart-text">
                    <h3>Cantidad</h3>
                    <p>{productCart.quantity} </p>
                    </div>
                    <div className="cart-text">
                    <h3>Precio c/u</h3>
                    <p>${productCart.price} </p>
                    </div>
                    <button onClick={ () => deleteProductById(productCart.id)} className="delate-cart"><FaRegTrashAlt /></button>
                </div>
            ))
        }
        <div className="cart-stadistics">
            <div className="carrito-acciones-vaciar">
            <button onClick={deleteCart} className="carrito-acciones-izquierda">Vaciar Carrito</button>
            
            </div>
            <div className="carrito-acciones-derecha">
                <div className="carrito-acciones-total">
                <p>Precio Total: {totalPrice()} </p>
                <Link to="/checkout" className="carrito-acciones-comprar">Comprar ahora!</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cart
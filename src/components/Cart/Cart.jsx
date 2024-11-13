import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)


    if (cart.length === 0){
        return(
            <div>
                <h3>No hay productos en el carrito</h3>
            </div>
        )
    } 

    return (
    <div>
        <h2>Productos En el carrito</h2>
        {
            cart.map((productCart)=> (
                <div key={productCart.id} style={{display: "flex", justifyContent: "space-around"}}>
                    <img src={productCart.image[0]} width={100} alt="" />
                    <p> {productCart.name} </p>
                    <p> Cantidad: {productCart.quantity} </p>
                    <p>Precio c/u: {productCart.price} </p>
                    <button onClick={ () => deleteProductById(productCart.id) }>Borrar Producto</button>
                </div>
            ))
        }

        <p>Precio Total: {totalPrice()} </p>
        <button onClick={deleteCart}>Borrar Carrito</button>
    </div>
    )
}

export default Cart
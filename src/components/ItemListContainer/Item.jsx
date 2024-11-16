import "./ItemListContainer.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Item = ({ product }) => {

    const { addProductInCart } = useContext(CartContext)

    const handleAddToCart = () => {
        if (product.stock > 0) {
            addProductInCart({ ...product, quantity: 1 })
        } else {
            alert("No hay suficiente stock disponible para este producto.")
        }
    }

return (
    <div className="container-itemvisual">
    <img src={product.image[0]} className="productos" alt="" />
    <h3>{product.name}</h3>
    <p className="price-item">Precio: ${product.price} (Dolares)</p>
    <Link to={"/detail/" + product.id} className="details-items">Ver Detalles</Link>
    <button onClick={handleAddToCart} className="add-cart">+</button>
    </div>
)
}

export default Item
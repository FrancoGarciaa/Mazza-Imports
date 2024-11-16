import "./ItemListContainer.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
return (
    <div className="container-itemvisual">
    <img src={product.image[0]} className="productos" alt="" />
    <h3>{product.name}</h3>
    <p className="price-item">Precio: ${product.price} (Dolares)</p>
    <Link to={"/detail/" + product.id} className="details-items">Ver Detalles</Link>
    <button>+</button>
    </div>
)
}

export default Item
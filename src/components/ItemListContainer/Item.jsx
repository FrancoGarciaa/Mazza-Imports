import "./ItemListContainer.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
return (
    <div className="container-itemvisual">
    <img src={product.image[0]} className="productos" alt="" />
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    <Link to={"/detail/" + product.id}>Ver Detalles
    </Link>
    </div>
)
}

export default Item
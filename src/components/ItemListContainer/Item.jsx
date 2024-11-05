import "./ItemListContainer.css"

const Item = ({ product }) => {
return (
    <div className="container-itemvisual">
    <img src={product.image} className="productos" alt="" />
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    </div>
)
}

export default Item
import "./ItemListContainer.css"
import Item from "./Item"

const ItemList = ({ products }) => {
return (
    <div className="container-item">
                    {
                    products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))
                }
    </div>
)
}

export default ItemList
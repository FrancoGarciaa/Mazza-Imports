import "./ItemListContainer.css"
import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"

const ItemListContainer = ({ products, idCategory }) => {


    return (
        <>
        <div>
        <h2>PRODUCTOS</h2>
        <ItemList products={products} idCategory={idCategory} />
        </div>
        </>
    )  
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

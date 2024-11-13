import "./ItemListContainer.css"
import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import Loading from "../Loading/Loading.jsx"
import useProducts from "../../hooks/useProducts.jsx"

const ItemListContainer = ({ products }) => {

    const { loading } = useProducts()

    return (
        <>
        <div>
        <h2>PRODUCTOS</h2>
        {
            loading === true ? (
                <Loading />
            ) : (
                <ItemList products={products} />
            )
        }
        </div>
        </>
    )  
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

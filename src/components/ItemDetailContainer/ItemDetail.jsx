import "./ItemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useState } from "react"

const ItemDetail = ({ product }) => {

    const [currentImage, setCurrentImage] = useState(product.image[0])
    const images = product.image.filter ( (image) => image !== currentImage)

    const { addProductInCart } = useContext(CartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }

        addProductInCart(productCart)

    }

    return (
        <>
    <div className="item-detail">

    <div className="images-detail-container">

    <div className="secondary-images">
        {
            images.map((image)=> (
                <img src={image} key={image} onClick={ () => setCurrentImage(image) } />
            ))
        }
    </div>
        <div className="main-image">
        <img src={currentImage}/>
        </div>
    </div>
        <div className="text-detail">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">Precio: ${product.price} </p>
            <p>Stock: {product.stock} Disponible/s </p>
            <ItemCount stock={product.stock} addProduct={addProduct} className="item-count"/>
        </div>
    </div>
        </>
    )
}

export default ItemDetail
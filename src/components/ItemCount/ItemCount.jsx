import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)


    const handleClickRest = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }


    const handleClickAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }


return (
    <div className="item-count">
        <button  onClick={handleClickRest} className="add-cart">-</button>
        <p className="add-cart">{count}</p>
        <button onClick={handleClickAdd} className="add-cart">+</button>
        <button onClick={ () => addProduct(count) } className="add-cart">Add to car</button>
    </div>
)
}

export default ItemCount
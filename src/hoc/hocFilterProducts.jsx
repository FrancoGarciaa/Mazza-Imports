import useProducts from "../hooks/useProducts"
import { useState } from "react"
import "./hocFilterProducts.css"

const hocFilterProducts = (Component) => {
    return function () {
        const { products } = useProducts()
        const [query, setQuery] = useState("")
        const [typeOrder, setTypeOrder] = useState("")

        const changeInput = (event) => {
            setQuery( event.target.value.toLowerCase() ) 
        }

        const handleOrderChange = (event) => {
            setTypeOrder(event.target.value)
        }

        const search = () => {
            let filteredProducts = products.filter( (product) => (
                product.name.toLowerCase().includes(query)
            ))

            if (typeOrder === "menor") {
                filteredProducts = filteredProducts.sort(
                (a, b) => a.price - b.price
                )
            } else if (typeOrder === "mayor") {
                filteredProducts = filteredProducts.sort(
                (a, b) => b.price - a.price
                )
            }

            return filteredProducts

        }

        return(
            <>
            <div className="filtrado">
                <input type="text" placeholder="Ingrese el producto..." onChange={changeInput} />
                {/* <button onClick={ () => setTypeOrder("menor") } className="filtrado-orden"><i class="bi bi-arrow-down">Menor precio</i></button>
                <button onClick={ () => setTypeOrder("mayor") } className="filtrado-orden"><i class="bi bi-arrow-up">Mayor precio</i></button> */}
            <select value={typeOrder} onChange={handleOrderChange}>
                <option value="">Ordenar por...</option>
                <option value="mayor">Mayor precio</option>
                <option value="menor">Menor precio</option>
            </select>
            </div>
            <Component products={search()} />
            </>
        )
    }
}

export default hocFilterProducts
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

        const search = () => {
            let filterProducts = products.filter( (product) => (
                product.name.toLowerCase().includes(query)
            ))

            if(typeOrder === "menor"){
                filterProducts = filterProducts.sort( (prevProduct, nextProduct) => prevProduct.price - nextProduct.price)
            }else if(typeOrder === "mayor"){
                filterProducts = filterProducts.sort( (prevProduct, nextProduct) => nextProduct.price - prevProduct.price)
            }

            return filterProducts

        }

        return(
            <>
            <div className="filtrado">
                <input type="text" placeholder="Ingrese el producto..." onChange={changeInput} />
                {/* <button onClick={ () => setTypeOrder("menor") } className="filtrado-orden"><i class="bi bi-arrow-down">Menor precio</i></button>
                <button onClick={ () => setTypeOrder("mayor") } className="filtrado-orden"><i class="bi bi-arrow-up">Mayor precio</i></button> */}
                <select>
                <option value="filtrar">Filtrar..</option>
                <option value="" onClick={ () => setTypeOrder("mayor") }>Mayor precio</option>
                <option value="" onClick={ () => setTypeOrder("menor") }>Menor precio</option>
                </select>
            </div>
            <Component products={search()} />
            </>
        )
    }
}

export default hocFilterProducts
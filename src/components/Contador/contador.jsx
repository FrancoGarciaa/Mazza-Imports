import { useState } from "react" 
import ContadorView from "./contadorView"
import Titulo from "./titulo"

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState (true)

    const aumentarContador = () => {
        setContador( contador + 1)
    }

    const restarContador = () => {
        setContador( contador - 1)
    }

    const AlternarToggle = () => {
        setToggle( !toggle )
    }

    return(
        <>
            <ContadorView contador={contador} aumentarContador={aumentarContador} restarContador={restarContador} />
        <div>
            <p>Valor toggle: { toggle.toString() }</p>
            <button onClick={ AlternarToggle }>Alternar toggle</button>
        </div>
        {
            toggle === true && <Titulo />
        }
        </>
    )
}

export default Contador 
import { useEffect } from "react"

const Titulo = () => {


    useEffect(()=> {


        const mostrarAnchoVentana = () => {
            console.log("Ancho de la ventana: ", window.innerWidth)
        }

        window.addEventListener("resize", mostrarAnchoVentana)

        return () => {
            window.removeEventListener("resize", mostrarAnchoVentana)
        }

    })


return (
    <div>
    <h1>Me miras solo en true</h1>
    </div>
)
}

export default Titulo
import { BounceLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
    return (
    <div className="loading">
        <BounceLoader color="#41707b" size={100}/>
        <h2>Bienvenido</h2>
    </div>
    )
}

export default Loading
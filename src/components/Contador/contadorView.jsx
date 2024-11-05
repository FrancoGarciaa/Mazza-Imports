const ContadorView = ( { contador, aumentarContador, restarContador } ) => {
    return (
        <>
        <div>
            <button onClick={ restarContador }>-</button> {contador} <button onClick={ aumentarContador }>+</button> 
        </div>
        </>
    )
}

export default ContadorView
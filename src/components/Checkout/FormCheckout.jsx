import "./FormCheckout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
return (
    <div className="formulario-check-buy">
    <form onSubmit={handleSubmitForm}>
        <div className="item-form">
        <label>Nombre Completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
        </div>
        <div className="item-form">
        <label>Telefono</label>
        <input type="number" name= "phone" value={dataForm.phone} onChange={handleChangeInput} />
        </div>
        <div className="item-form">
        <label>Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
        </div>
        <div className="item-form">
        <button type="submit">Enviar mi orden</button>
        </div>

    </form>
    </div>
)
}

export default FormCheckout
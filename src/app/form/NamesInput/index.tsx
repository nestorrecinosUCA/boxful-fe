import './NamesInput.css';

export default function NamesInput() {
  return (
    <div className={`namesInputContainer  defaultMargin`}>
      <div>
        <label htmlFor="names-input">Nombres</label>
        <input id={`names-input`} placeholder={`John`}></input>
      </div>
      <div>
        <label htmlFor="lastnames-input">Apellidos</label>
        <input id={`lastnames-input`} placeholder={`Doe`}></input>
      </div>
      <div>
        <label htmlFor="email-input">Correo Electrónico</label>
        <input id={`email-input`} placeholder={`john@email.com`}></input>
      </div>
    </div>
  )
}
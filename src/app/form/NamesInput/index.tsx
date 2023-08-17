import './NamesInput.css';

export default function NamesInput({onUpdate}) {
  return (
    <div className={`namesInputContainer  defaultMargin`}>
      <div>
        <label htmlFor="names-input">Nombres</label>
        <input
          onChange={(event) => {
            onUpdate({names: event.target.value})
          }}
          id={`names-input`}
          placeholder={`John`}
        />
      </div>
      <div>
        <label htmlFor="lastnames-input">Apellidos</label>
        <input
          onChange={(event) => {
            onUpdate({lastnames: event.target.value})
          }}
          id={`lastnames-input`}
          placeholder={`Doe`}
        />
      </div>
      <div>
        <label htmlFor="email-input">Correo Electrónico</label>
        <input
          onChange={(event) => {
            onUpdate({email: event.target.value})
          }}
          id={`email-input`}
          placeholder={`john@email.com`}
        />
      </div>
    </div>
  )
}
import { getValue } from '@/app/utils';
import './NamesInput.css';

export default function NamesInput({onUpdate}) {
  return (
    <div className={`namesInputContainer  defaultMargin`}>
      <div>
        <label htmlFor="names-input">Nombres</label>
        <input
          onChange={(event) => {
            const names = getValue(event);
            onUpdate({ names })
          }}
          id={`names-input`}
          placeholder={`John`}
        />
      </div>
      <div>
        <label htmlFor="lastnames-input">Apellidos</label>
        <input
          onChange={(event) => {
            const lastnames = getValue(event);
            onUpdate({ lastnames })
          }}
          id={`lastnames-input`}
          placeholder={`Doe`}
        />
      </div>
      <div>
        <label htmlFor="email-input">Correo Electrónico</label>
        <input
          onChange={(event) => {
            const email = getValue(event);
            onUpdate({ email })
          }}
          id={`email-input`}
          placeholder={`john@email.com`}
        />
      </div>
    </div>
  )
}
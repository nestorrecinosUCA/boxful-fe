import { StateType } from '@/app/types'

export default function StateSelector({ states, onUpdateCities }) {
  console.log('SELECTOR STATE', states)
  return (
    <div>
      <label htmlFor="state-selector">Departamento</label>
      <select id={`state-selector`} defaultValue={'Default'}>
        <option key={'Default'} value="Default">Seleccionar Departamento</option>
        {states.map((state: StateType) => (
          <option
            key={state.name}
            value={state.name}
            onSelect={(event) => onUpdateCities()}
          >
            {state.name}
          </option>
        ))}
      </select>
    </div>
  )
}
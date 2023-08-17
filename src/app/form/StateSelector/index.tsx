import { StateType } from '@/app/types'

export default function StateSelector({ states, onUpdateCities }) {
  return (
    <select defaultValue={'Default'}>
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
  )
}
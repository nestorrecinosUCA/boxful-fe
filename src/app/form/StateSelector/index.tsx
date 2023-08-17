import { StateType } from '@/app/types'

export default function StateSelector({ states, onUpdateCities, onUpdateOrder }) {
  return (
    <div>
      <label htmlFor="state-selector">Departamento</label>
      <select
        id={`state-selector`}
        defaultValue={'Default'}
        onChange={(event) => {
          const state = event.target.value;
          onUpdateCities(state)
          onUpdateOrder({ state })
        }}
      >
        <option disabled key={'Default'} value="Default">Seleccionar Departamento</option>
        {states.map((state: StateType) => (
          <option
            key={state.name}
            value={state.name}
          >
            {state.name}
          </option>
        ))}
      </select>
    </div>
  )
}
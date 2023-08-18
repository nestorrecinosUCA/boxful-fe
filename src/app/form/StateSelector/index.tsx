import { StateType } from '@/app/types'
import { getValue } from '@/app/utils';

export default function StateSelector({ states, onUpdateCities, onUpdateOrder }) {
  return (
    <div>
      <label htmlFor="state-selector">Departamento</label>
      <select
        id={`state-selector`}
        defaultValue={'Default'}
        onChange={(event) => {
          const state = getValue(event);
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
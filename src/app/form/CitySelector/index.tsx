import { CityType } from "@/app/types/city";

export default function CitySelector({ cities, onUpdateOrder }) {
  return (
    <div>
      <label htmlFor="city-selector">Municipio</label>
      <select
        id={`city-selector`}
        defaultValue={'Default'}
        onChange={(event) => {
          onUpdateOrder({ city: event.target.value })
        }}
      >
        <option disabled key={'Default'} value='Default'>Seleccionar Municipio</option>
        {cities.map((city: CityType) => (
          <option
            key={city.name}
            value={city.name}
          >
            {city.name}
          </option>
          ))}
      </select>
    </div>
  );
}
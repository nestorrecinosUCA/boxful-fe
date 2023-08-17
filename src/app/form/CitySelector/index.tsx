import { CityType } from "@/app/types/city";

export default function CitySelector({ cities }) {
  console.log('CITIES', cities[0]);
  return (
    <div>
      <label htmlFor="city-selector">Municipio</label>
      <select id={`city-selector`} defaultValue={'Default'}>
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
import { CityType } from "@/app/types/city";

export default function CitySelector({ cities }) {
  return (
    <div>
      <label htmlFor="city-selector">Municipio</label>
      <select id={`city-selector`} defaultValue={'Default'}>
        <option key={'Default'} value='Default'>Seleccionar Municipio</option>
        {cities.map((city: CityType) => (
          <select key={city.name} name={city.name}>{city.name}</select>
          ))}
      </select>
    </div>
  );
}
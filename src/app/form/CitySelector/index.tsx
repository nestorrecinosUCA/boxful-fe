import { CityType } from "@/app/types/city";

export default function CitySelector({ cities }) {
  return (
    <select defaultValue={'Default'}>
      <option key={'Default'} value='Default'>Seleccionar Municipio</option>
      {cities.map((city: CityType) => (
        <select key={city.name} name={city.name}>{city.name}</select>
      ))}
    </select>
  );
}
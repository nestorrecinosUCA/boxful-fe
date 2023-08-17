import './AddressInformation.css';
import CitySelector from "@/app/form/CitySelector";
import StateSelector from "@/app/form/StateSelector";

export default function AddressInformation({states, onUpdateCities, cities}) {
  return (
    <div className={`addressInfoContainer`}>
      <StateSelector
        states={states}
        onUpdateCities={onUpdateCities} />
      <CitySelector
        cities={cities} />
      <div>
        <label htmlFor="reference-point">Punto de Referencia</label>
        <input id={`reference-point`} type="text" />
      </div>
    </div>
  );
}
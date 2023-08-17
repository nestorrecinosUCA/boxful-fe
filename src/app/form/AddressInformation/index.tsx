import './AddressInformation.css';
import CitySelector from "@/app/form/CitySelector";
import StateSelector from "@/app/form/StateSelector";

export default function AddressInformation({states, onUpdateCities, cities, onUpdateOrder}) {
  return (
    <div className={`addressInfoContainer defaultMargin`}>
      <StateSelector
        states={states}
        onUpdateCities={onUpdateCities}
        onUpdateOrder={onUpdateOrder}
      />
      <CitySelector
        cities={cities}
        onUpdateOrder={onUpdateOrder}
      />
      <div>
        <label htmlFor="reference-point">Punto de Referencia</label>
        <input id={`reference-point`} type="text" />
      </div>
    </div>
  );
}
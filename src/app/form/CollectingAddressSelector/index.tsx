import './CollectingAddressSelector.css';
import { CollectingAddressType, StateType } from "@/app/types";

export default function CollectingAddressSelector({states}) {
  const collectionPoints = states.flatMap((state: StateType) => state.collectionAddresses);

  return (
    <div className={`collectingAddressContainer`}>
      <label htmlFor="collecting-point">📍 Dirección de recolección</label>
      <select id={`collecting-point`} defaultValue={'Default'}>
        <option value={'Default'}>Seleccionar punto de recolección</option>
        {collectionPoints.map((point: CollectingAddressType) => (
          <option
            key={point.address}
            value={point.address}
          >
            {point.address}
          </option>
        ))}
      </select>
    </div>
  )
}
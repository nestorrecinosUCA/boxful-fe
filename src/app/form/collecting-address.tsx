import { State } from "@/app/types";

export default function CollectingAddressSelector({states}) {
  const collectionPoints = states.flatMap((state: State) => state.collectionAddresses);

  return (
    <select defaultValue={'Default'}>
      <option value={'Default'}>Seleccionar punto de recolección</option>
      {collectionPoints.map(point => (
        <option
          key={point.address}
          value={point.address}
        >
          {point.address}
        </option>
      ))}
    </select>
  )
}
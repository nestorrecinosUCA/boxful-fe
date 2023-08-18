import { getValue } from '@/app/utils';
import './DestinationAddress.css';

export default function DestinationAddress({onUpdateOrder}) {
  return (
    <div className="destinationContainer">
      <label htmlFor="destination-address">Direccion de Destino</label>
      <input
        id="destination-address"
        type="text"
        onChange={(event) => {
          const userAddress = getValue(event);
          onUpdateOrder({ userAddress })
        }}
      />
    </div>
  );
}

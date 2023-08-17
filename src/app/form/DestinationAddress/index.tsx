import './DestinationAddress.css';

export default function DestinationAddress() {
  return (
    <div className="destinationContainer">
      <label htmlFor="destination-address">Direccion de Destino</label>
      <input id="destination-address" type="text" />
    </div>
  );
}

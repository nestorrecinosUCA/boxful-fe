import './IndicationsInput.css';

export default function IndicationsInput() {
  return (
    <div className={`indications-input defaultMargin`}>
      <label htmlFor="indications-input">Indicaciones</label>
      <input id={`indications-input`} type="text" placeholder="Indicaciones de entrega" />
    </div>
  );
}

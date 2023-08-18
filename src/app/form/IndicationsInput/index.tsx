import { getValue } from '@/app/utils';
import './IndicationsInput.css';

export default function IndicationsInput({ onUpdateOrder }) {
  return (
    <div className={`indications-input defaultMargin`}>
      <label htmlFor="indications-input">Indicaciones</label>
      <input
        id={`indications-input`}
        type="text"
        placeholder="Indicaciones de entrega"
        onChange={(event) => {
          const indications = getValue(event);
          onUpdateOrder({ indications });
        }}
      />
    </div>
  );
}

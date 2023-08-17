import './CollectingAndAddress.css';
import CollectingAddressSelector from "@/app/form/CollectingAddressSelector";
import DatePickerSelector from "@/app/form/DatePicker";

export default function CollectingAndDate({address, onUpdate}) {
  return (
    <div className={`collectingAndAddressContainer`}>
      <CollectingAddressSelector
        states={address}
        onUpdateOrder={onUpdate}
      />
      <DatePickerSelector
        onUpdateOrder={onUpdate}
      />
    </div>
  )
}
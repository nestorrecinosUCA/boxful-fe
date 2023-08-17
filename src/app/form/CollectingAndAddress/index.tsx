import './CollectingAndAddress.css';
import CollectingAddressSelector from "@/app/form/CollectingAddressSelector";
import DatePickerSelector from "@/app/form/DatePicker";

export default function CollectingAndDate({address}) {
  return (
    <div className={`collectingAndAddressContainer`}>
      <CollectingAddressSelector states={address} />
      <DatePickerSelector />
    </div>
  )
}
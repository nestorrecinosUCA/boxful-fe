import './PhoneAndAddress.css';

import { MdLocationOn } from 'react-icons/md'

import DestinationAddress from "@/app/form/DestinationAddress";
import PhoneIput from "@/app/form/PhoneInput";

export default function PhoneAndAddress({ onUpdate }) {
  return (
    <div className={`phoneAndAddressContainer  defaultMargin`}>
      <PhoneIput />
      <div className='locationIcon'>
        <MdLocationOn />
      </div>
      <DestinationAddress
        onUpdateOrder={onUpdate}
      />
    </div>
  )
}
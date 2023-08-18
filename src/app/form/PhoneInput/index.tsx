import { useEffect, useState } from 'react';
import './PhoneInput.css';
import { Input, Select, Space } from 'antd'

export default function PhoneIput() {
  // Use code and number as individuals to join them once they are updated
  const [phoneNumberObj, setPhoneNumberObj] = useState({ code: undefined, number: undefined });
  const [phoneNumber, setPhoneNumber] = useState('');
  const onUpdatePhoneObj = ({ phone, code }) => {
    console.log(phone);
    setPhoneNumberObj({...phoneNumberObj, phone, code});
  }

  // Update phone number using the object
  const onUpdatePhone = () => {
    const code = phoneNumberObj?.code ? phoneNumberObj.code : '';
    const number = phoneNumberObj?.number ? phoneNumberObj.number : '';
    const newPhone = `${code} ${number}`;
    setPhoneNumber(newPhone.toString());
    console.log(phoneNumber.toString());
  }

  const options = [
    {
      value: '+503',
      label: '🇸🇻 +503',
    },
    {
      value: '+502',
      label: '🇬🇹 +502',
    },
  ];
  
  return (
  <div className='phoneContainer'>
    <label htmlFor="">Teléfono</label>
    <Space.Compact className="phoneInputContainer">
        <Select
          defaultValue="🇸🇻 +503"
          options={options}
          onChange={(code) => {
            onUpdatePhoneObj({ code })
            onUpdatePhone()
          }}
        />
        <Input
          defaultValue=''
          onChange={(num) => {
            onUpdatePhoneObj({ number: num.target.value });
            onUpdatePhone();
          }}
        />
    </Space.Compact>
  </div>
  )
}
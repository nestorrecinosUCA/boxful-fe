import './PhoneInput.css';
import { Input, Select, Space } from 'antd'

export default function PhoneIput() {
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
      <Select defaultValue="🇸🇻 +503" options={options} />
      <Input defaultValue="+503" />
    </Space.Compact>
  </div>
  )
}
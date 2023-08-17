import './DatePicker.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {  DatePicker, Space  } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

export default function DatePickerSelector() {
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

    // eslint-disable-next-line arrow-body-style
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };
  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });
  return (
    <div className={`datePickerContainer`}>
      <label htmlFor="date-picker">📅 Fecha programada</label>
      <Space direction="vertical" size={12}>
        <DatePicker
          className='datePicker'
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{
            defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
          }}
          />
    </Space>
      {/* <input id={`date-picker`} type='date'/> */}
    </div>
  )
}
export default function DatePicker() {
  return (
    <div>
      <label htmlFor="date-picker">Fecha programada</label>
      <input id={`date-picker`} type='date'/>
    </div>
  )
}
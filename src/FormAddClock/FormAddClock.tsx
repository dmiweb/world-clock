type Settings = {
  city: string,
  timeZoneOffset: number
}

const FormAddClock = ({ onAdd }: { onAdd: (form: Settings) => void }): JSX.Element => {
  const handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { currentTarget } = event;

    const clockSettings = {
      city: (currentTarget.city.value).trim(),
      timeZoneOffset: currentTarget.timeZone.value
    }

    onAdd(clockSettings);

    currentTarget.reset();
  }

  return (
    <form className='form-add-clock' onSubmit={handleForm}>
      <label className="title-container">
        <span className="title-input">Название</span>
        <input type="text" name='city' className='title-city-input' required />
      </label>
      <label className="title-container">
        <span className="title-input">Временная зона</span>
        <input type="number" name='timeZone' className='time-zone-offset-input' required />
      </label>
      <button type='submit' className='form-submit-btn'>Добавить</button>
    </form>
  );
}

export default FormAddClock;
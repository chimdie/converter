import React, {useState} from 'react'

function App() {
  const [km, setKm] = useState('')

  function convert(){
    return (km/1.609).toFixed(2)
  }
  function handleChange(e){
    setKm(e.target.value) 
  }
  const solved = () => {
    return convert(km)
  }
  return (
    <div className='main'>
      <h1>Kilometer(Km) to miles per hour converter</h1>
      <form className="form"  onSubmit={(e)=> e.preventDefault()} >
        <input
        className='input'
          value={km}
          onChange={handleChange}
          placeholder='Enter a number'
        />
        {/* <button>Convert</button> <br /><br /> */}
      </form>
      <h2><small>{km}km </small>is <span>{solved()}</span> miles/hr </h2>
    </div>
  );
}

export default App;

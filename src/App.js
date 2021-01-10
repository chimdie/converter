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
    <form className="form"  onSubmit={(e)=> e.preventDefault()} >
      <input
      className='input'
        type="text"
        value={km}
        onChange={handleChange}
      />

      {/* <button>Convert</button> <br /><br /> */}
      
      <h2><small>{km}km </small>is <span>{solved()}</span> miles/hr </h2>
    </form>
    </div>
  );
}

export default App;

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
    convert(km)
    console.log(convert(km))
  }
  return (
    <form className="main"  onSubmit={(e)=> e.preventDefault()} >
      <input
        type="text"
        value={km}
        onChange={handleChange}
      />
      <button>Convert</button> <br /><br />
      <h4> {solved()} </h4>
    </form>
  );
}

export default App;

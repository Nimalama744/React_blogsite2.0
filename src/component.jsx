import React, { useState } from 'react'


const Component = () => {

    const [name, setname] = useState("Guest")
    const [roll, setroll] = useState(1)
    const [color, setcolor] = useState("#FFFFFF")

    function Namechange (event) {
        setname(event.target.value);
    }

    function Rollchange (event) {
        setroll(event.target.value);
    }

    function Colorchange (event) {
        setcolor (event.target.value)
    }
  return (
    <div>
        <input className='text-black px-1 rounded-sm m-2' value={name} onChange={Namechange} />
        <p>Name: {name}</p>

        <input className='text-black px-1 rounded-sm m-2' value={roll} onChange={Rollchange} type='number' />
        <p>Name: {roll}</p>

        <h1>Selected Color : {color}</h1>
        <label > Select a color :</label>
        <input type="color" value={color} onChange={Colorchange} /> <br /><br />
        <span className='text-xl p-7 inline-block rounded-full' style={{ backgroundColor: color}}>{color}</span>
    </div>
  )
}

export default Component
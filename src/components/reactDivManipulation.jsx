import React, { useState } from 'react'

export default function ReactDivManipulation() {
  const [buttonSize, setButtonSize] = useState(100)

  const handleClick = () => {
    setButtonSize(buttonSize + 100)
  }

  return (
    <div>
      <button
        id='mbutton' 
        style={{ width: '100px', height: '50px' }}
        onClick={handleClick}
      >Buton</button>

      <div style={{ marginTop: '20px',backgroundColor: 'black', width: `${buttonSize}px`, height: '100px' }} id='mdiv'></div>
    </div>
  )
}
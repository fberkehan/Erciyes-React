import React, { useState }  from 'react'


function NumberListApp() {
    const [numbers, setNumbers] = useState([]);
  
    const handleAddNumber = () => {
      const input = document.getElementById('input');
      const newNumber = parseInt(input.value);
      if (!isNaN(newNumber)) {
        setNumbers([...numbers, newNumber]);
        input.value = '';
      }
    };


    function handleRemoveNumber() {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const newNumbers = [...numbers];
      newNumbers.splice(randomIndex, 1);
      setNumbers(newNumbers);
    }
  
    function allRemove() {
      setNumbers([]);
    }


    return (
      <div>
        <input id="input" type="number" placeholder='Enter a number'/>
        <button onClick={handleAddNumber}>Add Number</button>
        <button onClick={handleRemoveNumber} style={{ marginLeft: '10px',backgroundColor: 'green', color: 'white' }}>RANDOM DELETE</button>
        <button onClick={allRemove} style={{ marginLeft: '10px',backgroundColor: 'red', color: 'white' }}>Hepsini sil</button>

        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default NumberListApp
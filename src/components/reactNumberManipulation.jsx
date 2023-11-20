import React, { useState } from 'react'

function useRandomNumberList() {
    const [randomNumberList, setRandomNumberList] = useState([])

    return [randomNumberList, setRandomNumberList]
}

function ReactDivManipulationF() {
    const [randomNumberList, setRandomNumberList] = useRandomNumberList()

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100)
        setRandomNumberList([...randomNumberList, randomNumber])
    }

    return (
        <div>
            <button onClick={handleClick}>Add Random Number</button>
            <ul>
                {randomNumberList.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default ReactDivManipulationF
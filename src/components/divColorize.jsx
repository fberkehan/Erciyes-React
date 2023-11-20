import React, { useState } from 'react';

function DivColorize() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const [randomColor, setRandomColor] = useState('black');

    const assignRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setRandomColor(colors[randomIndex]);
    };

    return (
        <div>
            <button id='colorbutton' onClick={assignRandomColor}>Change Color</button>
            <div id='colorizediv' style={{ backgroundColor: randomColor, width: '100px', height: '100px' }}></div>
        </div>
    );
}

export default DivColorize;

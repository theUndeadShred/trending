import React, { useState } from 'react';
import './Cell.scss';
import Typer from '../Typer';

function Cell(props) {

    const [animal, setAnimal] = useState(props.fetchAnimal())
    const [colorKey, setColorKey] = useState(Math.floor(Math.random() * Math.floor(8)))

    const reset = () => {
        setAnimal(props.fetchAnimal())
        setColorKey(Math.floor(Math.random() * Math.floor(8)))
    }

    return (
        <div className="cell-container">
            <div className={`Cell color${colorKey}`}>
                <Typer reset={reset} input={animal}></Typer>
            </div>
        </div>
    )
}

export default Cell;

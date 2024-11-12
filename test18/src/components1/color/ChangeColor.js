import React, { useContext } from 'react';
import { ChangeColorContext } from '../../context1/ChangeColorContext';

const ChangeColor = () => {

    const {color,onColor} = useContext(ChangeColorContext)
    return (
        <div>
            <h1 style={{color:color}}>Color : {color}</h1>
            <p>
                <button onClick={()=>onColor('tomato')}>tomato</button>
                <button onClick={()=>onColor('pink')}>pink</button>
                <button onClick={()=>onColor('skyblue')}>skyblue</button>
                <button onClick={()=>onColor('yellow')}>yellow</button>
            </p>
        </div>
    );
};

export default ChangeColor;
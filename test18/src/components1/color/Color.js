import React, { useContext } from 'react';
import { ColorContext } from '../../context1/ColorContext';
import { CountContext } from '../../context1/CountContext';

const Color = () => {

    //value 가져오기
    const {color, onTomato, onPink, onSkyblue, onYellow} = useContext(ColorContext)
    const {count} = useContext(CountContext)

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={()=>onTomato()}>tomato</button>
                <button onClick={()=>onPink()}>pink</button>
                <button onClick={()=>onSkyblue()}>skyblue</button>
                <button onClick={()=>onYellow()}>yellow</button>
            </p>
        </div>
    );
};

export default Color;
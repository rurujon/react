import React, { useContext } from 'react';
import { CountContext } from '../../context1/CountContext';
import { ColorContext } from '../../context1/ColorContext';

const Count = () => {

    //context value 받기
    const {count,increment,decrement} = useContext(CountContext)
    const {color} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color:color}}>숫자 : {count}</h1>
            <p>
                <button onClick={()=>increment()}>증가</button>
                <button onClick={()=>decrement()}>감소</button>
            </p>
        </div>
    );
};

export default Count;
import React,{useState} from 'react';
import './Test6.css'

const Test6 = () => {

    const [isActive,setIsActive] = useState(false)

    const onAdd = () =>{setIsActive(true)}
    const onRemove = () =>{setIsActive(false)}
    const onToggle = () =>{setIsActive(!isActive)}

    return (
        <div className='wrap'>
            <div className='on'>오늘은 목요일입니다.</div>
            <div className='lineRed'>오늘은 목요일입니다.</div>

            <div className={isActive?'on':''}>오늘은 목요일입니다.</div>
            <div className={`${isActive?'lineRed':''} ${isActive?'on':''}`}>오늘은 목요일입니다.</div>
            <p>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </p>
            
        </div>
    );
};

export default Test6;
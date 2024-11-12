import React, {useState} from 'react';

const Test6 = () => {

    const [check,setCheck] = useState(false)

    const changeChk = (evt) => {
        const {checked} = evt.target
        setCheck(checked)
    }
    return (
        <div style={{color:check ? 'red' : '#000'}}>
            <input type='checkbox' checked={check} onChange={changeChk}/>
            체크박스를 클릭하세요.
        </div>
    );
};

export default Test6;
import React,{useState} from 'react';

const Test3 = () => {

    const [bgColor,setBgColor] = useState('pink')

    // 토글키를 만든다.
    const onColor = () =>{
        //setBgColor('tomato')
        setBgColor(bgColor==='pink'?'tomato':'pink')
    }

    return (
        <div>
            <p>h2 클릭하면 배경색이 pink/tamato</p>
            <h2 style={{width:400,padding:50,border:'1px solid #000',background:bgColor,cursor:'pointer'}} onClick={onColor}>
            배경색 : {bgColor}
            </h2>
        </div>
    );
};

export default Test3;
import React,{useState} from 'react';

const Test4 = () => {

    const [visible,setVisible] = useState(false)

    const onShow = () =>{
        setVisible(true)
    }
    const onHide = () =>{
        setVisible(false)
    }
    const onToggle = () =>{
        //!true -> false, !false -> true
        setVisible(!visible)

    }
    return (
        <div>
            <p>
                <button onClick={onShow}>보이기</button>
                <button onClick={onHide}>숨기기</button>
                <button onClick={onToggle}>
                    보이기 / 숨기기
                </button>
            </p>
            {
                visible &&
                <div style={{width:300,height:100,background:'tomato'}}>
                    내용
                </div>
            }
        </div>
    );
};

export default Test4;
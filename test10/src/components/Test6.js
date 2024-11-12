import React, { useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {

    const [isShow,setIsShow] = useState(false)
    const [msg,setMsg] = useState('')

    const showMsg = (text,bool) => {
        setIsShow(bool)
        setMsg(text)
    }

    const onMsg1 = () => {

        const result = window.confirm('전부 삭제하시겠습니까?')

        if(result){
            showMsg('예. 전부 삭제합니다.',true)
        }else{
            return
        }

    }

    const onMsg2 = () => {

        const result = window.confirm('전부 복구하시겠습니까?')

        if(result){
            showMsg('예. 전부 복구합니다.',true)
        }else{
            return
        }

    }

    return (
        <div>
            <p>
                <button onClick={onMsg1}>전체삭제</button>
                <button onClick={onMsg2}>전체복구</button>
            </p>
            {
                isShow && <Test6Sub msg={msg} setIsShow={setIsShow}/>
            }
        </div>
    );
};

export default Test6;
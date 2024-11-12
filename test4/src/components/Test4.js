import React, {useRef} from 'react';
//input 박스를 사용하는 방법

const Test4 = () => {

    const idRef = useRef()
    const pwRef = useRef()

    const click = () => {

        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value,
        }

        console.log(data)

        const json = JSON.stringify(data,null,5)
        console.log(json)

    }
    return (
        <div>
            <h3>useRef</h3>
            <input type='text' ref={idRef}/>
            <input type='text' ref={pwRef}/>
            <button onClick={click}>확인</button>
        </div>
    );
};

export default Test4;
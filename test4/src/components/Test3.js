import React, {useState, useRef} from 'react';

const Test3 = () => {

    const idRef = useRef()  //1.이름선언

    const [userId,setUserId] = useState('')
    const [userPwd,setUserPwd] = useState('')

    const changeInput1 = (evt) =>{
        //setUserId(evt.target.value)
        const {value} = evt.target
        setUserId(value)
    }

    const changeInput2 = (evt) =>{
        //setUserPwd(evt.target.value)
        const {value} = evt.target
        setUserPwd(value)
    }

    const onReset = () =>{
        setUserId('')
        setUserPwd('')
        idRef.current.focus()   //3. 참조하는 부분에 적용할 작업.
    }

    return (
        <div>
            id: <input type='text' onChange={changeInput1} value={userId} ref={idRef}/> {/* 2.참조하는 부분 지정 */}
            pwd: <input type='text' onChange={changeInput2} value={userPwd}/>
            <button onClick={onReset}>초기화</button>
            <h2>id: {userId}</h2>
            <h2>pwd: {userPwd}</h2>

        </div>
    );
};

export default Test3;
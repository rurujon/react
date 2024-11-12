import React, { useState, useRef } from 'react';

const Test9 = () => {

    const nameRef = useRef()

    //const [name,setName] = useState()
    //const [age,setAge] = useState()
    //const [addr,setAddr] = useState()

    const [form,setForm] = useState({
        name:'', age:'', addr:''
    })

    //비구조 할당
    const {name,age,addr} = form
/*
    const onName = (evt) => {
        const {value,name} = evt.target
        setForm({   //중괄호를 하면 수정
            ...form,
            [name]:value    //name:suzi
        })
    }
    const onAge = (evt) => {
        const {value,name} = evt.target
        setForm({   //중괄호를 하면 수정
            ...form,
            [name]:value     //age:29
        })
    }
    const onAddr = (evt) => {
        const {value,name} = evt.target
        setForm({   //중괄호를 하면 수정
            ...form,
            [name]:value    //addr:서울
        })
    }
*/
    const changeInput = (evt) => {
        const {value,name} = evt.target
        setForm({   //중괄호를 하면 수정
            ...form,
            [name]:value    //name:suzi
        })
    }

    const onReset = () => {
        //setName('')
        //setAge('')
        //setAddr('')
        setForm({
            name:'',
            age:'',
            addr:''
        })
        nameRef.current.focus()
    }
 
    return (
        <div>
            <h2>input - 여러개 관리 2</h2>
            <input type='text' onChange={changeInput} value={name} 
            name='name' ref={nameRef}/>
            <input type='text' onChange={changeInput} 
            name='age' value={age}/>
            <input type='text' onChange={changeInput} 
            name='addr' value={addr}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
                {name} / {age} / {addr}
            </h4>
        </div>
    );
};

export default Test9;
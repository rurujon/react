import React, {useRef, useState} from 'react';

const FriendInput = ({onAdd}) => {

    const nameRef = useRef()


    const [form,setForm] = useState({
        name:'',age:'',image:''
    })

    const {name,age,image} = form
    
    const changeInput = (evt) => {
        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const onInsert = () => {
        if(!name||!age||!image) return

        //데이터 추가 코딩
        onAdd(form)

        setForm({
            name:'',age:'',image:''
        })

        nameRef.current.focus()
    }

    return (
        <div className='formAdd'>
            <p>
                <label>이름</label>
                <input type='text' value={name} name='name' onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label>나이</label>
                <input type='text' value={age} name='age' onChange={changeInput}/>
            </p>
            <p>
                <label>사진</label>
                <input type='text' value={image} name='image' onChange={changeInput}/>
            </p>
            <p>
                <button onClick={onInsert}>추가</button>
            </p>
        </div>
    );
};

export default FriendInput;
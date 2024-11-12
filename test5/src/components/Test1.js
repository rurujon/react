import React, {useState} from 'react';

const Test1 = () => {

    const [form,setForm] = useState({
        userId:'', userPwd:''
    })

    const {userId,userPwd} = form
    const changeInput = (evt) => {
        const {value,name} = evt.target

        setForm({
            ...form,
            [name]:value
        })
    }
    return (
        <div>
            <input type='text' value={userId} name='userId' onChange={changeInput}/>
            <input type='text' value={userPwd} name='userPwd' onChange={changeInput}/>
            <button disabled={userPwd.length<7}>확인</button>

            {
                userPwd.length>6 ? 
                <button>확인</button>:
                <button disabled>확인</button>
            }
        </div>
    );
};

export default Test1;
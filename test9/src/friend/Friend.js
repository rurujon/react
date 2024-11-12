import React, {useState, useRef} from 'react';
import '../assets/css/reset.css'
import './style.css'
import FriendList from './FriendList';
import FriendInput from './FriendInput';
import friend from '../assets/api/FriendData'

const Friend = () => {

    const no = useRef(friend.length + 1)

    const [data, setData] = useState(friend)

    const [chk, setChk] = useState(true)

    const allDel = () => {
        setData([])
    }

    const resetData = () => {
        setData(friend)
    }

    const changeChk = (evt) => {
        const {checked} = evt.target
        setChk(checked)
    }

    const onAdd = (form) => {
        form.id = no.current++
        setData([...data,form])
    }

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }

    return (
        <div className='wrap'>
            <h1>친구들 총 인원 : {data.length}명</h1>
            <p className='chk'>
                <input type='checkbox' checked={chk} onChange={changeChk}/>
                {
                    chk ? '추가 비활성' : '추가 활성'
                }
            </p>

            <FriendList data={data} onDel={onDel}/>

            <p className='btn'>
                <button onClick={allDel}>모두 삭제</button>
                <button onClick={resetData}>초기 복구</button>
            </p>
            {
                chk && <FriendInput onAdd={onAdd}/>
            }
        </div>
    );
};

export default Friend;
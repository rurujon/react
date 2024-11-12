import React, { useState, useRef } from 'react';
import '../assets/css/reset.css'
import './style.css'
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';
import Message from './Message';

const Customer = () => {

    const userData = [
        {id:1,name:'배수지',job:'가수'},
        {id:2,name:'박민영',job:'배우'},
        {id:3,name:'정소민',job:'배우'},
        {id:4,name:'고윤정',job:'배우'}
    ]

    const no = useRef(userData.length + 1)
    const [users,setUsers] = useState(userData)

    const [current, setCurrent] = useState({})
    const [isEdit,setIsEdit] = useState(false)

    const [msg,setMsg] = useState('')
    const [isShow,setIsShow] = useState(false)

    const onAdd = (user) => {
        user.id = no.current++
        setUsers([
            ...users,
            user
        ])
        onShow('명단을 추가합니다.')
        
    }

    const onDel = (id) => {
        setUsers(users.filter(user=>user.id!==id))
        onShow('명단을 삭제합니다.')
        
    }

    const onEdit = (user) => {
        setCurrent(user)
        setIsEdit(true)

    }

    const onUpdate = (data) => {
        setIsEdit(false)
        setUsers(users.map(user=>user.id===data.id?data:user))
        onShow('명단을 수정합니다.')
        
    }

    const onShow = (text) => {
        setMsg(text)
        setIsShow(true)
    }

    return (
        <div className='Customer'>
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit}/>
                : <AddUser onAdd={onAdd}/>
            }
            <ListUser users={users} onDel={onDel} onEdit={onEdit}/>
            <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>
        </div>

    );
};

export default Customer;
import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/reset.css'
import './style.css'
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';
import Message from './Message';
import taxiService from '../service/taxiService';

const Customer = () => {

    const [users,setUsers] = useState([])

    const [current, setCurrent] = useState({})
    const [isEdit,setIsEdit] = useState(false)

    const [msg,setMsg] = useState('')
    const [isShow,setIsShow] = useState(false)

    

    const onData = async() => {
        const res = await taxiService.getUser()
        setUsers(res)
    }

    useEffect(()=>{
        onData()
    })


    const onAdd = (user,image) => {
        
        taxiService.addUser(user,image)
        onShow('명단을 추가합니다..')
        
    }

    const onDel = (item) => {
        taxiService.deleteUser(item._id)
        onData()
        onShow('명단을 삭제합니다.')
        
    }

    const onEdit = (user) => {
        setCurrent(user)
        setIsEdit(true)

    }

    const onUpdate = (data) => {
        setIsEdit(false)
        taxiService.updateUser(data)
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
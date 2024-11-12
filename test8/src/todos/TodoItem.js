import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import {
    MdOutlineCheckBoxOutlineBlank,
    MdOutlineCheckBox
} from "react-icons/md";


const TodoItem = ({todos, onDel, onToggle}) => {

    const {id,text,done} = todos
    return (
        <li className={done?'on':''}>
            <span onClick={()=>onToggle(id)}>
                {done ? <MdOutlineCheckBox/> : <MdOutlineCheckBoxOutlineBlank/>}
            </span>
            <em onClick={()=>onToggle(id)}>{text}</em>
            <button onClick={()=>onDel(id)}>
                <FaRegTrashAlt color='rgb(175,169,169)' size='20'/>
            </button>
        </li>
    );
};

export default TodoItem;
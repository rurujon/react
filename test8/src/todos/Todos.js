import React, {useRef, useState} from 'react';
import './Todos.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {

    const no = useRef(1)

    const [todos,setTodos] = useState([
        {id:1,text:'점심먹기',done:false}
    ])

    const onAdd = (text) => {
        
        setTodos([
            ...todos,
            {
                id:no.current++,
                text:text,
                done:false
            }
        ])

    }

    const onDel = (id) => {
        setTodos(todos.filter(item=>item.id!==id))
    }

    const onToggle = (id) => {
        /*
        setTodos(todos.map(item=>{
            if(item.id===id){
                return{
                    ...item,
                    done:!item.done
                }
            }else{
                return item
            }
        }))
        */

        setTodos(todos.map(item=>item.id===id?{
            ...item,done:!item.done
        }:item))
    }

    return (
        <div className='Todos'>
            <h1>Todo List</h1>
            <TodoInput onAdd={onAdd}/>
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;
import React, { useContext } from 'react';
import { TodosContext } from '../../context2/TodosContext';
import TodoItem from './TodoItem';
import { ColorContext } from '../../context1/ColorContext';

const TodoList = () => {

    const {data} = useContext(TodosContext)
    const {color} = useContext(ColorContext)
    return (
        <div style={{color}}>
            {
                data.map(item=><TodoItem key={item.id} item = {item}/>)
            }
        </div>
    );
};

export default TodoList;
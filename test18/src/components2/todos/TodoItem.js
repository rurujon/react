import React, { useContext } from 'react';
import { TodosContext } from '../../context2/TodosContext';

const TodoItem = ({item}) => {

    const {id,text} = item
    
    const {onDel} = useContext(TodosContext)

    return (
        <div>
            {id} / {text}
            <button onClick={()=>onDel(id)}>삭제</button>
        </div>
    );
};

export default TodoItem;
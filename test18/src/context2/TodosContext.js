import React, { createContext, useState } from 'react';

export const TodosContext = createContext()

const TodosProvider = ({children}) => {

    const [data,setData] = useState([
        {id:1, text:'배수지와 만나기'},
        {id:2, text:'배수지와 밥먹기'},
        {id:3, text:'배수지와 티비보기'},
        {id:4, text:'배수지와 여행가기'},
        {id:5, text:'배수지와 유인나 사인 받기'},
    ])

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }

    return (
        <div>
            <TodosContext.Provider value={{data,onDel}}>
                {children}
            </TodosContext.Provider>
        </div>
    );
};

export default TodosProvider;
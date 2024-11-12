import React, { createContext, useMemo, useState } from 'react';

export const CountContext = createContext()

const CountProvider = (props) => {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const value = useMemo(()=>({count,increment,decrement}),
    [count,increment,decrement])
    return (
        //<CountContext.Provider value={{count,increment,decrement}}>
        <CountContext.Provider value={value}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;
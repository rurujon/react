import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ({children}) => {

    const [color,setColor] = useState('green')

    const onColor = (text) => {
        setColor(text)
    }

    const value = useMemo(()=>({color,onColor}),[color,onColor])

    return (
        //<ChangeColorContext.Provider value={{color,onColor}}>
        <ChangeColorContext.Provider value={value}>
            {children}            
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;
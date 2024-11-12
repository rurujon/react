import React, { createContext, useMemo, useState } from 'react';

//관리자 생성
export const ColorContext = createContext()

const ColorProvider = (props) => {

    const [color,setColor] = useState('blue')

    //이벤트 함수
    const onTomato = () => {setColor('tomato')}
    const onPink = () => {setColor('pink')}
    const onSkyblue = () => {setColor('skyblue')}
    const onYellow = () => {setColor('yellow')}

    const value = useMemo(()=>({color,onTomato,onPink,onSkyblue,onYellow}),
    [color,onTomato,onPink,onSkyblue,onYellow])
    
    return (
        //<ColorContext.Provider value={{color,onTomato,onPink,onSkyblue,onYellow}}>
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;
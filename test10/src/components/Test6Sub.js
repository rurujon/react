import React, { useEffect } from 'react';

const Test6Sub = ({msg,setIsShow}) => {

    useEffect(()=>{

        const timer = setTimeout(()=>{
            setIsShow(false)
        },3000)

        return ()=>{
            clearInterval(timer)
        }
    })
    return (
        <div style={{background:'yellow',padding:15,margin:30,fontSize:25}}>
            메세지 : {msg}
            
        </div>
    );
};

export default Test6Sub;
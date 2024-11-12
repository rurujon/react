import React, { useEffect, useState } from 'react';

const Test4 = () => {

    const [count, setCount] = useState(1)

    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setCount(count + 1)
    //     },1000)

    //     return ()=>{
    //         console.log('뒷정리')
    //         clearInterval(timer)
    //     }
    // })

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Timer')
            setCount(count => count+1)
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h1>출력 : {count}</h1>
            
        </div>
    );
};

export default Test4;
import React,{useState} from 'react';

const Test5 = () => {

    const [count,setCount] = useState(0)

    const increment1 = () =>{
        setCount(count+1)
    }
    const increment2 = () =>{
        // setCount(count+10)
        // setCount(count+5)
        // setCount(count+1)
        //모든 게 동작해서 합쳐지는 게 아닌, 맨 아래만 동작한다.

        setCount(i => i+2)
    }

    const decrement1 = () =>{
        setCount(count-1)
    }
    const decrement2 = () =>{
        //setCount(count-1)
        //setCount(count-5)
        //setCount(count-10)

        setCount(count=>count-5)
    }

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <p>
                <button onClick={increment1}>증가</button>
                <button onClick={decrement1}>감소</button>
            </p>
            <p>
                <button onClick={()=>setCount(count+1)}>증가</button>
                <button onClick={()=>setCount(count-1)}>감소</button>
            </p>
            <p>
                <button onClick={increment2}>증가</button>
                <button onClick={decrement2}>감소</button>
            </p>
        </div>
    );
};

export default Test5;
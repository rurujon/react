import React, {useState, useCallback} from 'react';

//리액트는 태생이 . 하나만 바뀌어도 전체가 랜더링이 된다.
//이걸 보완한다.

const Test3 = () => {

    const [count,setCount] = useState(1)

    const ran = Math.random()
    console.log('test')

    const increment = useCallback(() => {
        console.log(ran)
        setCount(count+1)
    },[count])

    const decrement = useCallback(() => {
        console.log(ran)
        setCount(count-1)

    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test3;
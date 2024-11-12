import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {

    const [text,setText] = useState('')

    const ref1 = useRef()

    useEffect(()=>{
        console.log('useEffect')
        ref1.current.focus()
    }
    ,[] //대괄호가 추가된다면 딱 한 번만 실행한다.
    )

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref1.current.focus()
    }
    //,[] //대괄호가 추가된다면 딱 한 번만 실행한다.
    )

    return (
        <div>
            <input type='text' ref={ref1}
            onChange={evt=>setText(evt.target.value)}/>
            
        </div>
    );
};

export default Test2;
import React, { useRef, useState } from 'react';

const Test3 = () => {

    const no = useRef(1)
    const textRef = useRef()

    const [data,setData] = useState([])
    const [text,setText] = useState('')

    const onText = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const onAdd = (evt) => {

        evt.preventDefault()
        setData([
            ...data,
            {
                id:no.current++,
                //text:text
                text    //변수이름이 동일할 경우에는 이렇게 생략해서 하나만 써도 돌아간다.
            }
        ])
        setText('')
        textRef.current.focus()
    }

    return (
        <div>
            <form onSubmit={onAdd}> {/* form은 자체적으로 새로고침 명령어를 가지고 있다. */}
                <input type='text' onChange={onText} value={text} name='text' ref={textRef}/>
                <button type='submit'>추가</button>
                
            </form>
            <ul>
                {
                    data.map(item=><li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
            
        </div>
    );
};

export default Test3;
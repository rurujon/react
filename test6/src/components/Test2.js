import React,{useState, useRef} from 'react';

const Test2 = () => {

    const no = useRef(1)

    const [data,setData] = useState([])

    const names = '배수지,유인나,정인선,박혜선,이효리,한혜진,한지민'.split(',')

    const onAdd = () => {
        const ran = Math.floor(Math.random()*names.length)

        setData([   //대괄호 : 입력
            ...data,
            {
                //id:data.length,
                id:no.current++,
                name:names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>고유번호</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;
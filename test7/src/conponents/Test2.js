import React, {useState, useRef} from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

    const no = useRef(6)

    const onAdd = (name) => {
        //alert('추가')
        setData([
            ...data,
            {
                id:no.current++,
                name:name
            }
        ])
    }

    const [data,setData] = useState([
        {id:1,name:'배수지',age:'29'},
        {id:2,name:'정인선',age:'32'},
        {id:3,name:'정인나',age:'30'},
        {id:4,name:'정소민',age:'35'},
        {id:5,name:'박민영',age:'37'}

    ])

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
        //setData(data.filter(item=>item.id===id))

        //이름삭제
        //setData(data.filter(item=>item.name!==name))
    }
    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr/>
            <Test2Sub onAdd={onAdd} onDel={onDel}/>
            
        </div>
    );
};

export default Test2;
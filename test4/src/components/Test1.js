import React,{useState} from 'react';

const Test1 = () => {

    const [data,setData] = useState([
        {id:1,name:'배수지',age:'29'},
        {id:2,name:'정인선',age:'32'},
        {id:3,name:'정인나',age:'30'},
        {id:4,name:'정소민',age:'35'},
        {id:5,name:'박민영',age:'37'},
    ])

    const onAdd1 = () =>{
        setData(data.concat({id:6,name:'전소민',age:35,done:false}))
    }
    const onAdd2 = () =>{
        const newData = data.concat({id:7,name:'유인나',age:45,done:true})
        setData(newData)
    }
    const onAdd3 = () =>{
        setData([
            ...data,
            {id:8,name:'고윤정',age:35,done:false}
        ])
    }
    const onAdd4 = () =>{
        const newData = data.concat({id:9,name:'서예지',age:36,done:true})
        setData(newData)
        setData([...data,newData])
    }

    return (
        <div>
            <p>
                <button onClick={onAdd1}>추가1</button>
                <button onClick={onAdd2}>추가2</button>
                <button onClick={onAdd3}>추가3</button>
                <button onClick={onAdd4}>추가4</button>
            </p>

            {
                data.map((item,index)=> <p key={item.id}>
                {item.id} / {item.name} / {item.age} / {item.done ? '참' : '거짓'}</p>
                )
            }
            
        </div>
    );
};

export default Test1;
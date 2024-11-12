import React,{useState} from 'react';

const Test1 = () => {

    const [name,setName] = useState('좋아하는 사람')   
    const onName1 = () =>{
        setName('배수지')
    }
    const onName2 = () =>{
        setName('유인나')
    }

    return (
        <div>
            이름 : {name}<br/>
            <button onClick={onName1}>배수지</button>
            <button onClick={onName2}>유인나</button>
        </div>
    );
};

export default Test1;
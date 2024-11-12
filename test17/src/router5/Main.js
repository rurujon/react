import React, {useState,useEffect} from 'react';
import Member from './Member';

const Main = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])

    return (
        <div>
            <h1>Member : {data.length}명 </h1>
            {
                data.map(item=><Member key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Main;
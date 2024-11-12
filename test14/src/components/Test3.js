import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test3 = () => {
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    const [valueId,setValueId] = useState(1)
    const [num,setNum] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${valueId}`)
        .then(res=>{
            setData(res.data)
            setLoading(false)
            setError('')
        }).catch(error=>{
            setData({})
            setLoading(true)
            setError('데이터를 찾을 수 없습니다.')
        })
    },[num])

    const search = () => {
        setNum(valueId)
    }

    return (
        <div>
            <input type='text' value={valueId} 
            onChange={evt=>setValueId(evt.target.value)}/>
            <button onClick={search}>검색</button>
            {
                data && loading ? <h2>로딩중...</h2> : 
                <h3>출력 : {data.title}</h3>
            }
            <p>
                {error ? error : null}
            </p>
            
        </div>
    );
};

export default Test3;
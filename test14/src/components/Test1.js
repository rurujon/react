import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Test1 = () => {

    const [data, setData] = useState()

    /*
    //1. fetch 사용(javascript에서 지원)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setData(res))
    },[])
    
    //화면이 구성 완료될 때 실행되므로 데이터가 있을 때만 반복문을 돌려라
    
//------------------------------------------------------------------------------------
    //2. axios 사용

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>setData(res.data))
    },[])

//------------------------------------------------------------------------------------

    //3. async/await 사용
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setData(data)
        }
        getData()
    },[])
    */
//------------------------------------------------------------------------------------

    //4 async/await + axios 사용
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
        }
        getData()
    },[])

    return (
        <div>

            {
                data && data.map(item=><p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
            
        </div>
    );
};

export default Test1;

/*
[Ajax 요청 방법 - 4가지]


1. fetch 사용(javascript에서 지원)
   fetch(url,[option])

   fetch(url)
   .then(응답=>응답.json())

2. axios 사용
   axios.get(url)
      .then(응답 => 응답.data)
   .then 동기처리

3.  async/await 사용(Promise의 단점을 보완)
   비동기를 동기처럼 사용가능
   함수를 만듬
   await fetch(url)

4 async/await + axios 사용
   await axios.get(url) 
--------------------------------------------
[js의 데이터와 json 데이터 비교]
-------------------------------------
js파일 -> import AAA from './경로/파일명'

export default [
    {
    id: 1, 
    name: '홍길동', 
    age: 20, 
    addr:'서울' 
    }
]

---------------------------?
json파일 ->  import AAA from './경로/파일명.json'(Test9)

[
    {
    "id": 1, 
    "name": "홍길동", 
    "age": 20, 
    "addr":"서울" 
    }
]   
   
   
*/
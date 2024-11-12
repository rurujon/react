import React, {useState, useEffect, useMemo} from 'react';

const user = [
    {id:1, name:'배수지'},
    {id:2, name:'고민지'},
    {id:3, name:'naver'},
    {id:4, name:'daum'},
    {id:5, name:'NaVER'},
    {id:6, name:'DOG'},
    {id:7, name:'dog'},
    {id:8, name:'nate'},
    {id:9, name:'Cat'},
    {id:10, name:'gooGLE'},

]

const Test1 = () => {

    const [text,setText] = useState('')
    const [search,setSearch] = useState('')
    //const [data,setData] = useState(user)

    const onSearch = () => {
        setSearch(text)
    }
    /*
    useEffect(()=>{
        setData(user.filter(item=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
    },[search])
    */

    const data = useMemo(()=>{
        return user.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    },[search])
    return (
        <div>
            <input type='text' value={text}
            onChange={evt=>setText(evt.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <hr/>
            {
                data.map(item=><p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            
        </div>
    );
};

export default Test1;

//성능 최적화를 위해 사용
/*
[메모니제이션]
컴퓨터가 동일한 계산을 반복해서 할때 이전에 계산한 값을 메모리에 저장 함으로써
동일한 계산의 반복 수행을 제거하여 프로그램 속도를 빠르게 하는 기술이다

 - useMemo : return 값을 기억함 (잘쓰기 쉽지않다 + context)
	     3가지 방법(memo, useMemo, React.memo)

 - useCallback : 함수 자체를 기억함
	     useCallback은 코딩 하는것으로만 최적화됨(결과 못봄)


 useMemo(함수,의존성)
 useMemo(() => {}, deps)
 useMemo(() => {}, [의존변수])

 useCallback(함수,의존성)
 useCallback(() => {}, [의존변수])
  */
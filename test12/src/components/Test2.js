import React, {useState, useEffect} from 'react';

const dataList = [
    {id:1,name:'배수지'},
    {id:2,name:'박민영'},
    {id:3,name:'abc'},
    {id:4,name:'aBC'},
    {id:5,name:'CAT'},
    {id:6,name:'cat'},
    {id:7,name:'유인나'},
    {id:8,name:'전소민'},
    {id:9,name:'정인아'},
    {id:10,name:'Dog'},
]

const Test2 = () => {

    const [data,setData] = useState(dataList)
    const [text,setText] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    useEffect(()=>{
        setData(dataList.filter(item=>{     //RegExp : 정규화 표현식. 대소문자 구분없이 찾아라.
            const result = new RegExp(text,'ig')
            return item.name.match(result)
        }))
    },[text])

    const searchText = () => {
        //setData(dataList.filter(item=>item.name.indexOf(text)!==-1))

        //setData(dataList.filter(item=>item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase())!==-1))
        
        //setData(dataList.filter(item=>item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))
        
        // setData(dataList.filter(item=>{     //RegExp : 정규화 표현식. 대소문자 구분없이 찾아라.
        //     const result = new RegExp(text,'ig')
        //     return item.name.match(result)
        // }))

    }



    return (
        <div>
            <p>
                <input type='text' placeholder='검색어를 입력하세요' value={text} onChange={changeInput}/>
                <button onClick={searchText}>검색</button>
                <hr/>
                <ul>
                    {
                        data.map(item=><li key={item.id}>
                            {item.id} / {item.name}
                        </li>)
                    }
                </ul>
            </p>
            
        </div>
    );
};

export default Test2;
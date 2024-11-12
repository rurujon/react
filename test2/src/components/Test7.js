import React from "react";

const Test7 = () => {

    const title = '연예인'
    const arr = ['배수지','박민영','정인선','전소민','고윤정']
    const data = [
        {id:1,name:'배수지',age:'29'},
        {id:2,name:'정인선',age:'32'},
        {id:3,name:'정인나',age:'30'},
        {id:4,name:'정소민',age:'35'},
        {id:5,name:'박민영',age:'37'}
    ]

    return(
        <div>
            <h2>{title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>

            <hr/>

            {
                arr.map((item,index)=>{
                    return(<p key={index}>{index} / {item}</p>)
                })
            }
            <hr/>
            {
                arr.map((item,index)=><p key={index}>{index} / {item}</p>)
            }
            <hr/>
            {
                data.map((item,index)=>{
                    return (<p key={item.id}>{item.id}/{item.name}/{item.age}</p>)
                })
            }
            <hr/>
            {
                data.map((item,index)=>
                <p key={item.id}>{item.id}/{item.name}/{item.age}</p>)
            }
        </div>
    )

}

export default Test7
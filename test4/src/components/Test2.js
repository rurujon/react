import React from 'react';

const Test2 = () => {

    const click = (evt) =>{
        console.log(evt.target)     //내가 클릭한 대상
        //console.log(evt.currentTarget)  //이벤트가 붙어있는 대상(h2)

    }

    const onChange = (evt) => {
        console.log(evt.target)     //내가 클릭한 대상
        console.log(evt.target.value)  //이벤트가 붙어있는 대상(h2)
    }

    return (
        <div>
            <h2 onClick={click}>
                <span>확인</span>
                <em>클릭</em>
                <b>누르기</b>
            </h2>
            <hr/>
            <input type='text' onChange={onChange}/>
            
        </div>
    );
};

export default Test2;
import React, {useState} from 'react';

const Name = () =>{

    const [name,setName] = useState('박민영')

    const onChange = (evt) =>{
        const {value} = evt.target
        setName(value)
    }

    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <p>
                <label>이름 : </label>
                <input type='text' value={name} onChange={onChange}/>
                <span style={{marginLeft:15}}>{name}</span>
            </p>
        </div>
    )
}

const Hobby = ({hobby,changeInput}) =>{
    return (
        <div>
            <h2>Hobby 컴포넌트</h2>
            <p>
                <label>취미 : </label>
                <input type='text' value={hobby} onChange={changeInput}/>
                <span style={{marginLeft:15}}>{hobby}</span>
            </p>
        </div>
    )
}

const Display = ({hobby}) =>{
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h2>000가 좋아하는 취미는 {hobby} 입니다.</h2>
        </div>
    )
}

const Test2 = () => {

    const [hobby,setHobby] = useState('')

    const changeInput = (evt) =>{
        const {value} = evt.target
        setHobby(value)
    }
    
    return (
        <div>
            <Name/>
            <hr/>
            <Hobby hobby={hobby} changeInput={changeInput}/>
            <hr/>
            <Display hobby={hobby}/>
            
        </div>
    );
};


export default Test2;
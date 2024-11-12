import React, {useState} from 'react';
import Test3Name from './Test3Name';
import Test3Hobby from './Test3Hobby';
import Test3Display from './Test3Display';

const Test3 = () => {

    const [name,setName] = useState('')
    const [hobby,setHobby] = useState('')

    const onName = (evt) => {
        const {value} = evt.target
        setName(value)
    }

    const onHobby = (evt) => {
        const {value} = evt.target
        setHobby(value)
    }

    return (
        <div>
            <Test3Name name={name} onName={onName}/>
            <hr/>
            <Test3Hobby hobby={hobby} onHobby={onHobby}/>
            <hr/>
            <Test3Display name={name} hobby={hobby}/>
            
        </div>
    );
};

export default Test3;
import React from 'react';

const Test3Hobby = ({hobby,onHobby}) => {
    return (
        <div>
            <label>취미 : </label>
            <input type='text' value={hobby} onChange={onHobby}/>
            <span style={{marginLeft:20}}>{hobby}</span>
            
        </div>
    );
};

export default Test3Hobby;
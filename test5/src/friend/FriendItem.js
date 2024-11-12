import React from 'react';

const FriendItem = ({item}) => {

    const {name,age,image} = item

    return (
        <li>
            <p>
                <img src={image} alt={name}/>
            </p>
            <div>
                <strong>이름 : {name}</strong>
                <br/>
                <span>나이 : {age}</span>
            </div>
        </li>
    );
};

export default FriendItem;
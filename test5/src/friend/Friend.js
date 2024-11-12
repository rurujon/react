import React, {useState} from 'react';
import '../assets/css/reset.css'
import './style.css'
import FriendList from './FriendList';
import FriendData from '../assets/api/FriendData';

const Friend = () => {

    const [data,setData] = useState(FriendData)

    const onRemove = () => {
        setData([])
    }
    return (
        <div className='wrap'>
            <h1>친구들 총 인원 : {data.length}명</h1>
            
            <FriendList data={data}/>

            <p className='btn'>
                <button onClick={onRemove}>모두 삭제</button>
            </p>
        </div>
    );
};

export default Friend;
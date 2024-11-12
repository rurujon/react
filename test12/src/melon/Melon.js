import React, {useState} from 'react';
import '../assets/css/reset.css'
import './Melon.css'
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import music from '../assets/api/music';
import MelonModal from './MelonModal';

const Melon = () => {

    const [musics,setMusics] = useState(music)
    const [isShow,setIsShow] = useState(false)
    const [musicNum,setMusicNum] = useState([])

    const getDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()+1
        const day = now.getDate()
        const date = `${year}. ${month}. ${day}`
        return date
    }

    const onLike = (id) => {
        setMusics(musics.map(music=>music.id===id ? 
            {
            ...music,
            done:!music.done,
            like:music.done ? music.like - 1 : music.like + 1
        }:music))

    }

    const onSearch = (text) => {
        setMusics(music.filter(music=>music.title.
            toLocaleLowerCase().indexOf(text.toLocaleLowerCase())
        !==-1))
    }

    const onOpen = (id) => {
        setIsShow(true)
        setMusicNum(musics.find(music=>music.id===id))
    }
    const onClose = () => {
        setIsShow(false)
    }

    return (
        <div className='Melon'>
            <h2>멜론 순위 {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch}/>
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen}/>
            {
                isShow && <MelonModal musicNum={musicNum} onClose={onClose}/>
            }
        </div>
    );
};

export default Melon;
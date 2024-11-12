import React, {useState} from 'react';
import '../assets/css/reset.css'
import './style.css'
import movie from '../assets/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {

    const [data,setData] = useState(movie)
    const [movieInfo,setMovieInfo] = useState(data[0])
    const [isShow,setIsShow] = useState(false)

    const onOver = (id) => {

        const num = data.findIndex(item=>item.rank===id)
        setMovieInfo(data[num])
    }

    const onOpen = () => {
        setIsShow(true)
    }

    const onClose = () => {
        setIsShow(false)
    }

    return (
        <>
        <div className='gallery'>
            <MovieView movieInfo={movieInfo} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver}/>
        </div>
        {
            isShow && <Modal onClose={onClose} movieInfo={movieInfo}/>
        }
        </>
    );
};

export default Movies;
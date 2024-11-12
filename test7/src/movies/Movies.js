import React, {useState} from 'react';
import './style.css'
import MoviesList from './MoviesList';
import movieData from '../assets/api/Movie'

const Movies = () => {

    const [data,setData] = useState(movieData)

    const onDel = (no) => {
        setData(data.filter(item=>item.no!==no))
    }

    return (
        <div className='wrap'>
            <h2>최신 개봉작</h2>
            <MoviesList data={data} onDel={onDel}/>
            
        </div>
    );
};

export default Movies;
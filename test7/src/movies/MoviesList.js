import React from 'react';
import MoviesItem from './MoviesItem';

const MoviesList = ({data,onDel}) => {
    return (
        <div className='movie'>
            {
                data.map(item=><MoviesItem key={item.no} item={item} onDel={onDel}/>)
            }
        </div>
    );
};

export default MoviesList;
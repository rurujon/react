import React, {useMemo} from 'react';

const getColor = (color) => {
    switch(color){
        case 'pink' : return '분홍'
        case 'tomato' : return '주황'
        case 'orange' : return '오렌지'
        case 'yellow' : return '노랑'
        default : return '없음'
    }
}

const getMovie = (movie) => {
    switch(movie){
        case '인질' : return '황정민,김재범,이유미'
        case '담보' : return '성동일,하지원,박소이'
        case '도굴' : return '이제훈,조우진,신혜선'
        case '기적' : return '박정민,이성민,윤아'
        default : return '없음'
    }
}



const Test2Sub = ({color,movie}) => {

    // const colorInfo = getColor(color)
    // const movieInfo = getMovie(movie)

    const colorInfo = useMemo(()=>getColor(color),[color])
    const movieInfo = useMemo(()=>getMovie(movie),[movie])

    return (
        <div>
            <h4>좋아하는 색은 {color} / {colorInfo}</h4>
            <h4>좋아하는 영화는 {movie} / {movieInfo}</h4>
        </div>
    );
};

export default Test2Sub;
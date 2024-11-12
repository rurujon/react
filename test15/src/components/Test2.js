import React, {useState} from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

    const [color,setColor] = useState('')
    const [movie,setMovie] = useState('')

    const onColor = (evt) => {
        setColor(evt.target.value)
    }

    const onMovie = (evt) => {
        setMovie(evt.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <p>
                <input type='text' value={color} onChange={onColor}/>
                <span>pink, tomato, orange, yellow</span>
            </p>
            <h2>당신이 좋아하는 영화는?</h2>
            <p>
                <label>인질</label>
                <input type='radio' name='movie' value={'인질'} onChange={onMovie}/>
            </p>
            <p>
                <label>담보</label>
                <input type='radio' name='movie' value={'담보'} onChange={onMovie}/>
            </p>
            <p>
                <label>도굴</label>
                <input type='radio' name='movie' value={'도굴'} onChange={onMovie}/>
            </p>
            <p>
                <label>기적</label>
                <input type='radio' name='movie' value={'기적'} onChange={onMovie}/>
            </p>
            <hr/>
            <Test2Sub color={color} movie={movie}/>
        </div>
    );
};

export default Test2;
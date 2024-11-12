import React, { useState } from 'react';
import img0 from '../s_images/suzi0.jpg'
import img1 from '../s_images/suzi1.jpg'
import images from '../assets/api/images';

const Test4 = () => {

    const [data,setData] = useState(images)

    return (
        <div>
            {
                data.map(item => <article key={item.id}>
                    <h3>이름 : {item.title}</h3>
                    <img src={item.image} alt='' width='300'/>
                </article>)
            }
        </div>
    );
};

export default Test4;
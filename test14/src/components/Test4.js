import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test4 = () => {

    const [data,setData] = useState([])
    const [text,setText] = useState('')

    useEffect(()=>{
        const url = `https://hn.algolia.com/api/v1/search?query=${text}`
        axios.get(url)
        .then(res=>setData(res.data.hits))
    },[text])
    
    return (
        <div>
            <input type='text' value={text} onChange={evt=>setText(evt.target.value)}/>
            {
                data.map(item=><p key={item.objectID}>
                    {item.title}
                </p>)
            }
        </div>
    );
};

export default Test4;
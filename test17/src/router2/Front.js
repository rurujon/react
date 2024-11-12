import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Front = ({data}) => {

    const {name} = useParams()

    return (
        <div>
            <h1>Front Page</h1>
            {
                data.filter(item=>item.title===name)
                .map((item,index)=>(
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <h2>{item.info}</h2>

                    </div>
                ))
            }
        </div>
    );
};

export default Front;
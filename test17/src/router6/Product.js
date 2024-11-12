import React from 'react';
import data from './data'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = () => {
    return (
        <div>
            <h1>운동화 리스트 목록</h1>
            {
                data.map(item=><div key={item.id}>
                    <h3>
                        <Link to={`/products/${item.id}`}>
                            {item.name}
                        </Link>
                        - 가격 : ${item.price}
                    </h3>
                    <p>
                        <Link to={`/products/${item.id}`}>
                            <img src={item.photo} alt='' width={150}/>
                        </Link>
                    </p>
                </div>)
            }
        </div>
    );
};

export default Product;
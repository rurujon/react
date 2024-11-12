import React from 'react';
import { NewsItemBlock } from '../styled/newscss';
import News from './News';

const NewsItem = ({item}) => {

    const {title,description,url,urlToImage,author} = item

    return (
        <NewsItemBlock>
            {
                urlToImage && (
                    <div className='thumbnail'>
                        <a href={url}>
                            <img src={urlToImage} alt='thumbnail'/>
                        </a>
                    </div>
                )
            }
            
            <div className='content'>
                <h2>
                    <a href={url}>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>

        </NewsItemBlock>
    );
};

export default NewsItem;
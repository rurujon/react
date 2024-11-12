import React from 'react';
import { NewsListBlock } from '../styled/newscss';
import NewsItem from './NewsItem';

const NewsList = ({data}) => {
    return (
        <NewsListBlock>
            {
                data.map(item=><NewsItem key={item.url} item={item}/>)
            }
        </NewsListBlock>
    );
};

export default NewsList;
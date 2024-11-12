import React from 'react';
import { CategoryBlock, categories, CategoryLink } from '../styled/newscss';

const NewsCategory = ({category,selectMenu}) => {
    return (
        <CategoryBlock>
            {
                categories.map(item=>(
                    <CategoryLink key={item.name} active={category===item.name} 
                    onClick={()=>selectMenu(item.name)}>{item.text}</CategoryLink>
                ))
            }
            
        </CategoryBlock>
    );
};

export default NewsCategory;
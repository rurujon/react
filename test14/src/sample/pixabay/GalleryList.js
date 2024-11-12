import React from 'react';
import Mansory from 'react-masonry-css';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import { ImageContainer } from '../styled/pixabaycss';

const GalleryList = ({data}) => {
    return (
        <ImageContainer>
            <Mansory
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
                data.map(item=><GalleryItem key = {item.id} item={item}/>)
            }
            </Mansory>
        </ImageContainer>
    );
};

export default GalleryList;
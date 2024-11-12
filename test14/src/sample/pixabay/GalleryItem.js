import React from 'react';
import styled from 'styled-components';
import Numeral from 'numeral'
import { ImageItem } from '../styled/pixabaycss';

const GalleryItem = ({item}) => {

    const {views,downloads,likes,user,webformatURL,tags} = item
    const tagList = tags.split(',')

    return (
        <ImageItem>
            <img src={webformatURL} alt={user}/>
            <h3>{user}</h3>
            <ul>
                <li><em>조회수 : {Numeral(views).format('0,0')}</em></li>
                <li><em>다운로드 : {Numeral(downloads).format('0,0')}</em></li>
                <li><em>좋아요 : {Numeral(likes).format('0,0')}</em></li>

            </ul>
            <p>
                태그 : {tagList.map((tags,index)=><span key={index}>#{tags}&nbsp;&nbsp;</span>)}
            </p>
            
        </ImageItem>
    );
};

export default GalleryItem;
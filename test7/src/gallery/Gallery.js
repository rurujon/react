import React, {useState} from 'react';
import '../assets/css/reset.css'
import './style.css'
import GalleryList from './GalleryList';
import GalleryView from './GalleryView';
import data from '../assets/api/images'

const Gallery = () => {

    const [gallery,setGallery] = useState(data)
    const [img,setImg] = useState(gallery[0])

    const onView = (id) => {
        setImg(gallery.find(item=>item.id===id))
    }

    return (
        <div className='con-box'>
            
            <GalleryList gallery={gallery} img={img} onView={onView}/>
            <GalleryView img={img} onView={onView}/>
        </div>
    );
};

export default Gallery;
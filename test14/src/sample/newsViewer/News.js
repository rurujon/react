import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import NewsCategory from './NewsCategory';

const News = () => {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState('')
    const [category,setCategory] = useState('all')

    useEffect(()=> {
        const API_KEY = 
        '5fa90fd21ff247908ac6176d29ccf50c'
        const query = category==='all' ? '' : `&category=${category}`

        const url = `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${API_KEY}`

        axios.get(url)
        .then(res=>{
            setData(res.data.articles)
            setIsLoading(false)
            setError('')
        }).catch(error=>{
            setData([])
            setIsLoading(true)
            setError('뉴스 헤드라인을 읽어올 수 없습니다.')
        })
    },[category])

    const selectMenu = (text) => {
        setCategory(text)
    }

     return (
        <div>

            <NewsCategory category={category} selectMenu={selectMenu}/>
            {/*
            {
                data && <textarea rows={70} cols={200} value={JSON.stringify(data,null,2)}/>
            }
            */}

            {
                isLoading && data.length===0 && (<h1>No Found News</h1>)
            }
            {
                data && !isLoading && <NewsList data={data}/>
            }
            <p>
                {error ? error : null}
            </p>

        </div>
    );
};

export default News;
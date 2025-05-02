import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsDetails = () => {
    const [news, setNews] = useState([])
    const newsData = useLoaderData()
    const {id} = useParams()
    useEffect(()=>{
        if(id == '0'){
            return setNews(newsData)
        }
        if(id == '1' ){
            const newsFilter = newsData.filter(news=> news.others.is_today_pick === true)
            setNews(newsFilter)
        }
        else{
            const newsFilter = newsData.filter(news=> news.category_id == id)
            setNews(newsFilter)
        }
       
    }, [newsData, id])
    return (
        <div>
            <h2>News Home : ({news.length }) News Found</h2>

            <div>
                {
                    news.map((singleNews, idx) => <NewsCard key={idx} singleNews={singleNews}> </NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsDetails;
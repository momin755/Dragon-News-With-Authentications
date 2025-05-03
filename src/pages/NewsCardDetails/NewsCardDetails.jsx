import React, { useEffect, useState } from 'react';
import RightAside from '../../components/RightAside/RightAside';
import Header from '../../components/Header/Header';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const NewsCardDetails = () => {
    const [news, setNews] = useState([])
    const newsData = useLoaderData()
    const {id} = useParams()
    useEffect(()=>{
        const findNews = newsData.find(news=> news.id == id)
        setNews(findNews)
    }, [newsData, id])
    return (
        <div className='space-y-10 container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <div className='col-span-8 space-y-5'>
                    <img src={news.image_url} alt="" />
                    <h2 className='text-xl font-medium'>{news.title}</h2>
                    <h2 className='text-gray-600'>{news.details}</h2>
                    <Link to={`/newsDetails/${news.category_id}`} className='btn btn-error'> <FaArrowAltCircleLeft/> All News in the Category</Link>
                </div>
                <aside className='col-span-4'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsCardDetails;
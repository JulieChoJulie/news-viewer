import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
require('dotenv').config();


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        paddig-left: 1rem;
        padding-right: 1rem;
    }    
`;

const sampleArticle = {
    title: 'title',
    description: 'description',
    url: 'www.google.com',
    urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const YOUR_API_KEY = process.env.REACT_APP_NEWS_API_KEY;


    // const [data, setData] = useState(null);
    // const YOUR_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-ca&apiKey=${YOUR_API_KEY}`);
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-ca&apiKey=${YOUR_API_KEY}`);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            };
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem article={article} key={article.url} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
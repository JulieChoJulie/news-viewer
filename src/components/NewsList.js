import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
require('dotenv').config();


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }    
`;

const sampleArticle = {
    title: 'title',
    description: 'description',
    url: 'www.google.com',
    urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = ({ category }) => {
    const YOUR_API_KEY = process.env.REACT_APP_NEWS_API_KEY;


    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=ca${query}&apiKey=${YOUR_API_KEY}`
        );
    }, [category, YOUR_API_KEY]);


    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>Error has occurred....</NewsListBlock>
    }

    // If response is valid,
    const { articles } = response.data;


    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem article={article} key={article.url} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
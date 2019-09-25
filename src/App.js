import React, {useState} from 'react';
import NewsList from './components/NewsList';
// import axios from 'axios';
// require('dotenv').config();


const App = () => {
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

    return <NewsList/>;
};

export default App;
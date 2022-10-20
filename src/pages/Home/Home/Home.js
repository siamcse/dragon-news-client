import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../Shared/NewsSummary/NewsSummary';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>All News {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Home;
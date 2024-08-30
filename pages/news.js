import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NEWS } from '../queries';

const NewsPage = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <p>Loading news...</p>;

  if (error) return <p>Error fetching news: {error.message}</p>;

  return (
    <div>
      <h1>Latest News</h1>
      {data.news.map((article) => (
        <div key={article.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <small>Published at: {new Date(article.publishedAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
import React from 'react';
import {Link} from 'react-router-dom';
import ArticleContent from './ArticleContent';

const Articles = () => (
    <>
        <h1>Articles</h1>
        {ArticleContent.map((article, key) => (
            <Link className="article-item" key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default Articles;
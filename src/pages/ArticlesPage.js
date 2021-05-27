import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent';

const ArticlesPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={ArticleContent}/>
    </>
);

export default ArticlesPage;
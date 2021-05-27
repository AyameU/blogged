import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent';
import NotFound from './NotFound';

const Article = ({match}) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    if(!article) {
        return <NotFound />
    }

    const otherArticles = ArticleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles</h3>
            <ArticlesList articles={otherArticles}/>
        </>
    )
};

export default Article;
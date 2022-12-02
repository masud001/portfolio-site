import React from 'react';
import './article.css';
const Article = ({ imgUrl = 'https://via.placeholder.com/300x250', date, title }) => {
	return (
		<div className='mdr__blog-container_article'>
			<div className='mdr__blog-container_article-image'>
				<img src={imgUrl} alt='article thumb' />
			</div>
			<div className='mdr__blog-container_article-content'>
				<div className=''>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p>Read full article</p>
			</div>
		</div>
	);
};

export default Article;

import React from 'react';
import { Article } from '../../Components';
import './blog.css';
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from './import.js';
const Blog = () => {
	return (
		<div className='mdr__blog section__padding' id='blog'>
			<div className='mdr__blog-heading'>
				<h1 className=' gradient__text'>A lot is happening, We are blogging about it.</h1>
			</div>
			<div className='mdr__blog-container'>
				<div className='mdr__blog-container_groupA'>
					<Article
						imgUrl={Blog01}
						date='Dec 2, 2022'
						title='GPT-3 and Open  AI is the future. Let us explore how it is?'
					/>
				</div>
				<div className='mdr__blog-container_groupB'>
					<Article
						imgUrl={Blog02}
						date='Dec 2, 2022'
						title='GPT-3 and Open  AI is the future. Let us explore how it is?'
					/>
					<Article
						imgUrl={Blog03}
						date='Dec 2, 2022'
						title='GPT-3 and Open  AI is the future. Let us explore how it is?'
					/>
					<Article
						imgUrl={Blog04}
						date='Dec 2, 2022'
						title='GPT-3 and Open  AI is the future. Let us explore how it is?'
					/>
					<Article
						imgUrl={Blog05}
						date='Dec 2, 2022'
						title='GPT-3 and Open  AI is the future. Let us explore how it is?'
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;

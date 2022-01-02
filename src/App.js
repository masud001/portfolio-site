import React from 'react';
import { Article, Brand, Cta, Feature, Navbar } from './Components';
import { Blog, Features, Footer, Header, Possibility, WhatIsPortfolio } from './Containers';
import './App.css';
const App = () => {
	return (
		<React.Fragment>
			<div className='app'>
				<div className='gradient__bg'>
					<Navbar />
					<Header />
				</div>
				<Brand />
				<WhatIsPortfolio />
				<Features />
				<Possibility />
				<Cta />
				<Blog />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default App;

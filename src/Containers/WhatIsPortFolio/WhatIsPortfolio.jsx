import React from 'react';
import { Feature } from '../../Components';
import './whatisportfolio.css';
const WhatIsPortfolio = () => {
	return (
		<div className='mdr__whatIsPortfolio section__margin' id='whatmdr'>
			<div className='mdr__whatIsPortfolio-feature'>
				<Feature
					title='What is GPT-3'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
				/>
			</div>
			<div className=' mdr__whatIsPortfolio-heading'>
				<h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
				<p>Explore The Library</p>
			</div>
			<div className=' mdr__whatIsPortfolio-container '>
				<Feature
					title='Chatbots'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
				/>
				<Feature
					title='Knowledgebase'
					text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
				/>
				<Feature
					title='Education'
					text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
				/>
			</div>
		</div>
	);
};

export default WhatIsPortfolio;

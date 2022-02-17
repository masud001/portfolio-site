import React from 'react';
import './feature.css';
const Feature = ({ title = 'title heading', text = 'content text' }) => {
	return (
		<div className='mdr__features-container__feature '>
			<div className='mdr__features-container__feature-title'>
				<div />
				<h1>{title}</h1>
			</div>
			<div className='mdr__features-container_feature-text'>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Feature;

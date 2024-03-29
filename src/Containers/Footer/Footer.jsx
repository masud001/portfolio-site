import React from 'react';
import mdrLogo from '../../assets/logo.svg';
import './Footer.css';
const Footer = () => {
	return (
		<div className='mdr__footer section__padding'>
			<div className='mdr__footer-heading'>
				<h1 className=' gradient__text'>
					Do you want to step in to the future before others
				</h1>
			</div>
			<div className='mdr__footer-button'>
				<p>Request Early Access</p>
			</div>
			<div className='mdr__footer-links'>
				<div className='mdr__footer-links_logo'>
					<img src={mdrLogo} alt='footer links logo' />
					<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
				</div>
				<div className='mdr__footer-links_area'>
					<h4>links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className='mdr__footer-links_area'>
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className='mdr__footer-links_area'>
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>
			<div className='mdr__footer-copyright'>
				<p>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;

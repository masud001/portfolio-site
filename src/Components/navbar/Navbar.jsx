import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
	<React.Fragment>
		<p>
			<a href='#home'>home</a>
		</p>
		<p>
			<a href='#whatmdr'>What is MDR?</a>
		</p>
		<p>
			<a href='#possibility'>Open AI</a>
		</p>
		<p>
			<a href='#features'>Case Studies</a>
		</p>
		<p>
			<a href='#blog'>Library</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className='mdr__navbar'>
			{/* links  */}
			<div className='mdr__navbar-links'>
				{/* logo  */}
				<div className='mdr__navbar-links_logo'>
					<img src={logo} alt={logo} className='logo' />
				</div>
				<div className='mdr__navbar-links_container'>
					<Menu />
				</div>
			</div>
			{/* sign up/in  */}
			<div className='mdr__navbar-sign'>
				<p>sign in</p>
				<button>sign up</button>
			</div>
			{/* menu for mobile  */}
			<div className='mdr__navbar-menu'>
				{toggleMenu ? (
					<RiCloseLine
						color='#fff'
						size={27}
						onClick={() => {
							setToggleMenu(false);
						}}
					/>
				) : (
					<RiMenu3Line
						color='#fff'
						size={27}
						onClick={() => {
							setToggleMenu(true);
						}}
					/>
				)}
				{toggleMenu && (
					<div className='mdr__navbar-menu_container scale-up-center '>
						<div className='mdr__navbar-menu_container-links'>
							<Menu />
							<div className='mdr__navbar-menu_container-links-sign'>
								<p>sign in</p>
								<button>sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

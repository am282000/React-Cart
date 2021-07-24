import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Cart } from '../Context';

const Header = () => {
	const { cart } = useContext(Cart);

	return (
		<>
			<span className="header">React Context API</span>
			<ul className="nav">
				<li>
					<Link to="/">Home Page</Link>
				</li>
				<li>
					<Link to="/cart">Cart ({cart.length})</Link>
				</li>
			</ul>
		</>
	);
};

export default Header;

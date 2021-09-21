import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import getCategories from '../services/getData';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
	const [ categories, setCategories ] = useState([])
	useEffect(() => {
		getCategories().then(res => setCategories(res))
	},[categories])

	return <nav>
		<Link className="brand" to="/">BatikdeBri</Link>
		<div>
			{categories.map(cat => <NavLink 
				key={cat.name}
				activeClassName="current-nav" 
				title={cat.name} 
				to={"/category/" + cat.name} 
				>{cat.icon}</NavLink>
			)}
			<CartWidget />
		</div>
	</nav>
}
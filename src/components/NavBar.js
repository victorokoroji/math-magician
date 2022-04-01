import { NavLink } from 'react-router-dom'
import '../CSS/navbar.css'

const Navbar = () => (
	<nav>
		<ul className='nav-items'>
			<li>
				<NavLink to='/' className={navLink => (navLink.isActive ? 'active' : 'none')}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/calculator' className={navLink => (navLink.isActive ? 'active' : 'none')}>
					Calculator
				</NavLink>
			</li>
			<li>
				<NavLink to='/quotes' className={navLink => (navLink.isActive ? 'active' : 'none')}>
					Quotes
				</NavLink>
			</li>
		</ul>
	</nav>
)

export default Navbar

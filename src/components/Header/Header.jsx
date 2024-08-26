import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                 <ul className='navigationDiv'>
                    <li>
                        <NavLink to='/' activeclassname='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeclassname='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact/contact' activeclassname='active'>Contact</NavLink> 
                    </li>
                    <li>
                        <NavLink to='/account/account' activeclassname='active'>Account</NavLink> 
                    </li>
                </ul>  
            </nav>
        </header>
    )
}

export default Header;
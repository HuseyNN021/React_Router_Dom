import { Link } from 'react-router-dom';
import './Menu.css'
const Menu=()=>{
    return(
        <>
            <menu>
                <nav>
                    <ul>
                        <Link to='/'>
                            <li>MainPage</li>
                        </Link>
                        <Link to='/About'>
                            <li>About</li>
                        </Link>
                        <Link to='/Home'>
                            <li>Home</li>
                        </Link>
                    </ul>
                </nav>
            </menu>
        </>
    )
}
export default Menu;
import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to ="/add">Add Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/list">Contact list</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
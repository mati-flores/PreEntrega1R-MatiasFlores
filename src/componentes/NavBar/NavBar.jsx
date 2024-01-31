
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>Dulce Vivi Pastelería </h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2">
                            Tortas/Tartas
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/3">
                            Galletas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/4">
                            Postres
                        </NavLink>
                    </li>



                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar
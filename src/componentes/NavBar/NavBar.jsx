
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>Dulce Vivi Pasteleria</h1>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Ubicación</li>
                    <li>Contacto</li>

                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
import { Link } from "react-router-dom";

function Menu (){
    return (
        <div className="toMenu">
            <ul className="menu" data-animation="center">
                <li>
                    <Link to="/" className="item">Home</Link>
                </li>
                <li>
                    <Link to="/about-us" className="item">Sobre Nosotros</Link>
                </li>
                <li>
                    <Link to="/list-tasks" className="item">Lista de tareas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
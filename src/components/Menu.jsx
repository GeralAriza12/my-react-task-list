import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Menu (){
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue('white.200')

    return (
        <div className="toMenu">
            <Button size='sm' onClick={toggleColorMode}>
                Toggle Mode
            </Button>
            <ul className="menu" data-animation="center">
                <li>
                    <Link to="/" color={color}>Home</Link>
                </li>
                <li>
                    <Link to="/about-us" color={color}>Sobre Nosotros</Link>
                </li>
                <li>
                    <Link to="/list-tasks" color={color}>Lista de tareas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
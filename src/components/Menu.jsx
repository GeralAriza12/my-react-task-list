import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from "react";
import { Link } from "react-router-dom";

function Menu (){
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue('white.200')

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    return (
        <div>
            <Button size='sm' onClick={toggleColorMode}>
                Toggle Mode
            </Button>
            <div className="toMenu">
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <button><Bars3Icon width={40} height={40}/></button>
                {mobileMenuVisible && (
                    <ul className="mobile-menu">
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
                )}
                </div>
                
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
        </div>
    )
}

export default Menu;
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    const color = useColorModeValue('gray.800', 'white.200')
    const fondo = useColorModeValue('white', 'gray.800')
    const bg = useColorModeValue( 'gray.200', 'gray.700')

    return (
        <div>
        <Box color={color} fondo={fondo} className="conten">
            <Box bg={bg} className="fondo">
                <img src="https://frontendchallenges.netlify.app/project-tracking-intro-component/images/illustration-devices.svg" className="fondoImg" />
            </Box>
            <div className="home">
                <h1>Bienvenido a tu</h1>
                <h2>APLICACIÓN DE TAREAS</h2>
                <p>
                    Hola!
                    Te damos la bienvenida a tu lista de tareas, la pagina web que te va ayudar 
                    a tener registro de tus tareas y ordenar tu día.
                </p>
                <Link to="/list-tasks"><button className="btn1">¡Comencemos!</button></Link>
            </div>
        </Box>
        </div>
    )
}

export default Home;
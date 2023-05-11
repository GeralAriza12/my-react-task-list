import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="conten">
        <div className="fondo">
            <img src="https://frontendchallenges.netlify.app/project-tracking-intro-component/images/illustration-devices.svg" className="fondoImg" />
        </div>
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
        </div>
    )
}

export default Home;
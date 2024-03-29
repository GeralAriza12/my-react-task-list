import { useColorModeValue } from "@chakra-ui/react";

const SobreNosotros = () => {
    const imag = useColorModeValue(
    'https://transferlab.es/wp-content/themes/transferlab/images/imagen_header_sobre.png',
    'https://www.grupolfmedia.com/wp-content/uploads/2020/10/consultoria-y-marketing-digital.png')

    return (
        <div className="conten">
            <h2><strong>SOBRE NOSOTROS</strong></h2>
            <div className="aboutUs">
                <p>
                    Esta página web le permitirá a los usuarios agendar sus tareas pendientes en el día, semana o mes,
                    ya que cuando tenemos una lista organizada gestionamos mejor el tiempo; el fin de esta página es 
                    aumentar la productividad de las personas que la usan, pues como humanos tendemos a olvidar donde 
                    anotamos las actividades pendientes y compromisos que tenemos, con este solo aplicativo podrás 
                    agregar, editar, darle un check a tu tarea y/o eliminarla, tendrás un control de lo que ya hiciste, 
                    de lo que debes hacer y de lo que ya no volverás hacer.
                    <br></br>
                    Las tecnologías que se usaron para está página: React (Hooks, PlusIcon, Form), js, css, html.
                </p>
                <img src={imag}/>
            </div>
        </div>
    )
}

export default SobreNosotros;
// Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)
function Task(props) {
    const { charge } = props;
    
    return(
        <div id="taskTarjet">
            <h4>{charge}</h4>
            <div>
                <button className="button">🖋️</button>
                <button className="button">⛔</button>
            </div>
        </div>
    );
}

export default Task;
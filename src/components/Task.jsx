import { useState } from "react";
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react'

const Task = ({ task, deleteTask, toggleTask, enterEditMode }) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const checkboxChange = () => {
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }

    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
  
    const sizes = 'xs'

    function descriptions(){
        if (!task.description) {
            return(
                <div>
                    <h4>No tienes descripción de esta tarea, si deseas agregar una descripción da click en
                    <button onClick={()=> enterEditMode(task, onClose)}>: Agregar descripción</button></h4>
                </div>
                )
        } else {
            return(
                <h4>{task.description}</h4>    
            )
        }
    }

    return(
    <li id="cardTarjet">
        <div id="taskTarjet">
        <div id="tasks">
            <input className="checkbox" type="checkbox" checked={isChecked} onChange={checkboxChange} name={task.name} id={task.id} />
            <div >
            <h3 m={2} htmlFor={task.id}> <strong>{task.name}</strong> </h3>   
            <>
            <Button colorScheme='blackAlpha' variant='link'
                onClick={() => handleClick(sizes)}
            >Descripción</Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`Descripción`}</DrawerHeader>
                <DrawerBody>
                    <div>{descriptions()}</div> 
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            </>
            </div>
        </div>
        </div>
        <div>
            <button className="buttonE" aria-label={`Update ${task.name} task`} onClick={()=> enterEditMode(task)}> <PencilSquareIcon width={24} height={24} /> </button>
            <button className="buttonB" aria-label={`Delete ${task.name} task`} onClick={()=> deleteTask(task.id)}>  <TrashIcon width={24} height={24} /> </button>
        </div>
    </li>
    );
}

export default Task;

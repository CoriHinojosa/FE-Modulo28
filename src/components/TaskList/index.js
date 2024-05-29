import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../Task';
import { CartH2, CartHr, CartArticle, ListContainer } from './styles';
import { removeTask } from '../../actions';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const handleTaskRemove = (id) => {
        dispatch(removeTask(id))
    }

    return(
        <>
        <CartArticle>
            <CartHr />
            <CartH2>･ CARRITO ･</CartH2>
            <ListContainer>
                {
                    tasks.map((task, desc) => (
                        <Task
                            key={task.id}
                            task={task.name}
                            desc={desc.description}
                            onRemove={() => handleTaskRemove(task.id)}
                        />
                    ))
                }
            </ListContainer>
        </CartArticle>
        </>
    )
}

export default TaskList;
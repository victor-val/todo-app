import React, {Fragment, useState} from 'react';
import { TodoList } from './TodoList';

export function App(){
    const [todos, setTodos] = useState([
        {id: 1, task: 'tarea 1', completed: false}
    ]);
    
    return (
        <Fragment>
            <TodoList todos={todos}/>
            <input type="text" placeholder='Nueva tarea'></input>
        </Fragment>

    )
    
}
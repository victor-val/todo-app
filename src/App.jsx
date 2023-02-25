import React from 'react';
import { TodoList } from './TodoList';

export function App(){
    return <TodoList todos={[{id: 1, task: 'tarea 1', completed: false}]}/>
    
}
import { useEffect, useReducer } from "react";
import { todoReducer } from '../07-useReducer/TodoReducer';

const initialState =  [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'add',
            payload: todo
        }
        dispatch( action )
    }

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action )
    }

    const onToggleTodo = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return {
        todos,
        handleDelete,
        handleNewTodo,
        onToggleTodo
    }

}
import React from 'react';
import Todo from './Todo';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
 export default function TodoList({todoList, toggleTodo}) {
    return (todoList.map(todo =>{
        return <Todo key ={todo.id} toggleTodo = {toggleTodo} todo = { todo}/>
    }))
}

// #endregion

//  TodoList;
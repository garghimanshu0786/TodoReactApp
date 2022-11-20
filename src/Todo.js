import React from 'react';

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
const Todo = ({todo, toggleTodo}) => {

    function handleTodoList(){
        toggleTodo(todo.id)
    }

    return <div>
        <label>
            <input type = "checkbox" checked={todo.completed} onChange ={handleTodoList}/>
        </label>
        {todo.name}</div>;
}

// #endregion

export default Todo;
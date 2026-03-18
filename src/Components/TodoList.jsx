import React from 'react';

const TodoList = () => {
    const todos = [
        {id: 1, text: "Learn JSX"},
        {id: 2, text: "Understand Prosp"},
        {id: 3, text: "Master State & events"},
        {id: 4, text: "Doing simple tasks"},
    ];

    return (
        <div>
            <h2>My React Todos</h2>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>{todo.text}</li>)
                }
                {/* <li>Learn JSX</li>
                <li>Understand Prosp</li>
                <li>Master State & events</li> */}
            </ul>
        </div>
    );
};

export default TodoList;
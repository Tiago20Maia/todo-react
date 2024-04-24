import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const initialTodos = [
        { id: 1, title: 'Estudar React', checked: false },
        { id: 2, title: 'Estudar JS', checked: true },
        { id: 3, title: 'Estudar Node JS', checked: false },
        { id: 4, title: 'Estudar Redux', checked: false },
    ];

    const [todos] = useState(initialTodos);
    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        console.log(value);
        erase();
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.which === ENTER_KEY) {
            submit();
        } else if (e.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">todo</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="o que precisa ser feito"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id.toString()}>
                            <span className='todo'>{todo.title}</span>
                            <button className='remove' type="button">
                                <MdDelete size={28} />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};
export default App;

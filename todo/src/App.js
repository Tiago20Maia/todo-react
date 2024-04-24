import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        setTodos([
            ...todos,
            {
                id: new Date().getTime(),
                title: value,
                checked: false,
            },
        ]);

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

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">todo</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="o que precisa ser feito?"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id.toString()}>
                            <span
                                className={[
                                    'todo',
                                    todo.checked ? 'checked' : '',
                                ].join(' ')}
                                onClick={() => onToggle(todo)}
                                onKeyPress={() => onToggle(todo)}
                                role="button"
                                tabIndex={0}
                            >
                                {todo.title}
                            </span>
                            <button className="remove" type="button">
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

import React, { useState } from 'react';
import './App.css';

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

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
            </section>
        </section>
    );
};
export default App;

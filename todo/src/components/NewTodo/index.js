import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        onNewTodo(value);
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
        <input
            className="new-todo"
            placeholder="o que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;

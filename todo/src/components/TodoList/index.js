import React from 'react';
import { MdDelete } from 'react-icons/md';

import PropTyes from 'prop-types';

import './styles.css';

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id.toString()}>
                    <span
                        className={['todo', todo.checked ? 'checked' : ''].join(
                            ' '
                        )}
                        onClick={() => onToggle && onToggle(todo)}
                        onKeyPress={() => onToggle && onToggle(todo)}
                        role="button"
                        tabIndex={0}
                    >
                        {todo.title}
                    </span>
                    <button
                        className="remove"
                        type="button"
                        onClick={() => onRemove && onRemove(todo)}
                    >
                        <MdDelete size={28} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTyes.arrayOf(
        PropTyes.shape({
            id: PropTyes.number.isRequired,
            title: PropTyes.string.isRequired,
            checked: PropTyes.bool.isRequired,
        })
    ).isRequired,
    onToggle: PropTyes.func.isRequired,
    onRemove: PropTyes.func.isRequired,
};

export default TodoList;

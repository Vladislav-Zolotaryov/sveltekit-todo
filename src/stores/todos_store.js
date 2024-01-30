import { v4 } from 'uuid';
import { writable } from 'svelte/store';

export const todos = writable([]);

/**
 * @typedef Todo
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} text - your name.
 * @property {boolean} completed - was it done.
 * @property {Date} createdAt - creation date.
 */

/**
 * 
 * @param {string} text
 */
export const addTodo = (text) => {
    todos.update((cur) => {
        const newTodos = [...cur, { id: v4(), text, completed: false, createdAt: Date.now() }];
        return newTodos;
    });
};

export const deleteTodo = (/** @type {string} */ id) => {
    todos.update((todos) => todos.filter((/** @type {Todo} */ todo) => todo.id !== id));
};

export const completeTodo = (/** @type {string} */ id) => {
    todos.update((todos) => {
        let index = -1;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            todos[index].completed = !todos[index].completed;
        }
        return todos;
    });
};

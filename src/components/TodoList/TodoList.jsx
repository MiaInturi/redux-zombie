import React from 'react';

import { Todo } from '../Todo/Todo';
import { connect } from '../../redux-mock/connect/connect';
import { deleteTodo } from '../../redux-mock/actions/actions';

const TodoListConnected = ({ todos, deleteTodoById }) => {
  return (
    <div>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todo description={todo.description} />
          <button type='button' onClick={() => deleteTodoById(todo.id)}>
            Delete todo by id {todo.id}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export const TodoList = connect(
  (state) => ({
    todos: state.todos
  }),
  (dispatch) => ({
    deleteTodoById: (todoId) => dispatch(deleteTodo(todoId))
  })
)(TodoListConnected);

export const ACTION_TYPES = {
  DELETE: 'DELETE'
};

export const deleteTodo = (todoId) => {
  return { type: ACTION_TYPES.DELETE, payload: todoId };
};

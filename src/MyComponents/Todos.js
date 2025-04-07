import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, onDelete }) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;

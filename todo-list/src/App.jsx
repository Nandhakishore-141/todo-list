import React, { useState } from 'react';
import TodoList from './Todolist.jsx';

export default function App() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      {showTodo ? <TodoList goBack={() => setShowTodo(false)} /> : (
        <>
          <h1>Welcome to the Home Page!</h1>
          <button
            onClick={() => setShowTodo(true)}
            style={{ padding: '10px 20px', marginTop: '20px' }}
          >
            Go to Todo List
          </button>
        </>
      )}
    </div>
  );
}

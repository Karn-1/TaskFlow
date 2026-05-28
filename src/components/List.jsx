import React, { useState, useEffect } from 'react';
import { addtodo } from '../redux/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShowTodo from './ShowTodo';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.Todo.todos);

  const [todo, setTodo] = useState('');

  function submithandler(e) {
    e.preventDefault();
    if (!todo.trim()) return;

    dispatch(addtodo(todo));
    setTodo('');
  }

  // update in localstorage todos
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen  bg-gray-900 flex justify-center py-3">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-4">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-white mb-3 text-center">
          My Todo List
        </h1>

        {/* Input */}
        <form onSubmit={submithandler} className="flex gap-3 mb-6">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter todo..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        {todos.length > 0 ? (
          <div className="space-y-2">
            {todos.map(todo => (
              <ShowTodo key={todo.id} eachtodo={todo} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-8">
            No todos to show
          </div>
        )}
      </div>
    </div>
  );
};

export default List;

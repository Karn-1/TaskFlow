import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { ticktodo, removeTodo } from '../redux/TodoSlice';

const ShowTodo = ({ eachtodo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-start justify-between px-4 py-3 mb-2 
                    bg-gray-800 rounded-lg shadow-md hover:shadow-emerald-700 transition">

      {/* Todo text */}
      <div
        className={`min-w-0 break-words text-base ${
          eachtodo.isTick
            ? "line-through text-gray-400"
            : "text-gray-100"
        }`}
      >
        {eachtodo.todo_desc}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 ml-4 shrink-0">
        
        <button
          onClick={() => dispatch(ticktodo(eachtodo.id))}
          className={`p-2 rounded-full transition transform ${
            eachtodo.isTick
              ? "bg-yellow-200 text-yellow-700 hover:scale-125"
              : "bg-green-200 text-green-700 hover:scale-125"
          }`}
          title={eachtodo.isTick ? "Undo" : "Complete"}
        >
          {eachtodo.isTick ? <RxCross1 /> : <TiTick />}
        </button>

        {eachtodo.isTick && (
          <button
            onClick={() => dispatch(removeTodo(eachtodo.id))}
            className="p-2 rounded-full bg-red-200 text-red-700 
                       hover:scale-125 transition transform"
            title="Delete"
          >
            <RiDeleteBin5Line />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowTodo;

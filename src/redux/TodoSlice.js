import { createSlice } from "@reduxjs/toolkit";

let initialTodos = [];

try {
  const savedTodos = localStorage.getItem("todolist");
  initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
} catch (e) {
  initialTodos = [];
}

const todoSlice = createSlice({
  name: "todo",

  initialState: { todos: initialTodos },

  reducers: {
    addtodo: (state, action) => {
      const newtodo = {
        id: Date.now(),        
        todo_desc: action.payload, 
        isTick: false         
      };

      state.todos.push(newtodo);

    },

    ticktodo: (state, action) => {
      const todo = state.todos.find(
        t => t.id === action.payload
      );

      if (todo) {
        todo.isTick = !todo.isTick ;
      }

    },
    removeTodo:(state,action)=>{
      const othertodo = state.todos.filter((t) => {
        return t.id !== action.payload;
      });
      state.todos = othertodo
    }
    
  }
});

export const { addtodo, ticktodo,removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

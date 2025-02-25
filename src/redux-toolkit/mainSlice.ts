import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface initialMainSliceInterface {
  filterState: string;
  todosArray: Todo[];
}

type Todo = {
  id: string;
  description: string;
  completed: boolean;
  time: string;
};

const initialState: initialMainSliceInterface = {
  filterState: "all",
  todosArray: [],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setFilterState(state, action: PayloadAction<string>) {
      state.filterState = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      const time = new Date().toLocaleString();
      state.todosArray.push({
        id: uuidv4(),
        description: action.payload,
        completed: false,
        time: time,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.todosArray.find((el) => el.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todosArray = state.todosArray.filter((el) => el.id !== action.payload);
    },
    clearTodo(state) {
      state.todosArray = state.todosArray.filter((el) => !el.completed);
    },
    resetState: () => initialState,
  },
});

export const { setFilterState, addTodo, toggleTodo, removeTodo, clearTodo, resetState } = mainSlice.actions;
export default mainSlice.reducer;
export type MainState = initialMainSliceInterface;  
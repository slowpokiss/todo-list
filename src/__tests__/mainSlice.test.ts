import { configureStore } from "@reduxjs/toolkit";
import mainSlice, { addTodo, toggleTodo, removeTodo, clearTodo, setFilterState, resetState } from "../redux-toolkit/mainSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

describe("mainSlice", () => {
  beforeEach(() => {
    store.dispatch(resetState());
  });
  it("test addTodo", () => {
    store.dispatch(addTodo("task1"));
    const state = store.getState().main;
    expect(state.todosArray).toHaveLength(1);
    expect(state.todosArray[0].description).toBe("task1");
  });

  it("test toggleTodo", () => {
    store.dispatch(addTodo("task1"));
    const todoId = store.getState().main.todosArray[0].id;
    
    store.dispatch(toggleTodo(todoId));
    let state = store.getState().main;
    expect(state.todosArray[0].completed).toBe(true);

    store.dispatch(toggleTodo(todoId));
    state = store.getState().main;
    expect(state.todosArray[0].completed).toBe(false);
  });

  it("test removeTodo", () => {
    store.dispatch(addTodo("task 1"));
    store.dispatch(addTodo("task 2"));
    const todoId = store.getState().main.todosArray[0].id;
  
    store.dispatch(removeTodo(todoId));
    const state = store.getState().main;
    expect(state.todosArray[0].description).toBe("task 2");
  });
  
  it("test clearTodo", () => {
    store.dispatch(addTodo("task 1"));
    store.dispatch(addTodo("task 2"));
    const todoId1 = store.getState().main.todosArray[0].id;
    const todoId2 = store.getState().main.todosArray[1].id;

    store.dispatch(toggleTodo(todoId1));
    store.dispatch(clearTodo());

    const state = store.getState().main;
    expect(state.todosArray).toHaveLength(1);
    expect(state.todosArray[0].id).toBe(todoId2);
  });

  it("test setFilterState", () => {
    store.dispatch(setFilterState("completed"));
    const state = store.getState().main;
    expect(state.filterState).toBe("completed");
  });
});

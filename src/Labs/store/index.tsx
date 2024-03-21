import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExample/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExample/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExample/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExample/todos/todosReducer";
export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
  helloReducer: { message: string; };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
};
}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;
import { Collapse } from "antd";
import { useSelector } from "react-redux";
import { initialMainSliceInterface } from "./redux-toolkit/mainSlice";
import CheckBoxComponent from "./components/CheckBoxComponent";
import ControlPanel from "./components/ContolPanel";
import ModalForm from "./components/ModalForm";
import "./App.css";

function App() {
  const { todosArray, filterState } = useSelector(
    (state: { main: initialMainSliceInterface }) => state.main
  );

  const filteredTodosArray = todosArray.filter(todo => {
    if (filterState === "active") {
      return !todo.completed;
    }
    if (filterState === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <>
      <ModalForm />
      <div className="todo-container">
        <Collapse
          size="large"
          items={[
            {
              key: "1",
              label: "WHAT NEED TO BE DONE?",
              children: (
                <div className="todo-list w-full">
                  <div className="flex flex-col w-full">
                    <div className="todos w-full">
                      {filteredTodosArray.map((todo) => (
                        <CheckBoxComponent
                          key={todo.id}
                          id={todo.id}
                          completed={todo.completed}
                          description={todo.description}
                          time={todo.time}
                        />
                      ))}
                    </div>
                    <ControlPanel />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { initialMainSliceInterface, setFilterState, clearTodo } from "../redux-toolkit/mainSlice";

export default function ControlPanel() {
  const dispatch = useDispatch();
  const { filterState, todosArray } = useSelector((state: { main: initialMainSliceInterface }) => state.main);

  const handleFilterChange = (filter: string) => {
    dispatch(setFilterState(filter));
  };

  const handleClearCompleted = () => {
    dispatch(clearTodo());
  };

  const todoCount = todosArray.filter(todo => !todo.completed).length;

  return (
    <div className="control-panel grid grid-cols-3 items-center p-4 text-gray-600 text-sm">
      <span>{`${todoCount} item${todoCount !== 1 ? 's' : ''} left`}</span>
      <div className="flex justify-between w-[250px]">
        <button
          className={`px-2 py-1 ${filterState === "all" ? "text-[#af40ff] border rounded" : "text-black"}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`px-2 py-1 ${filterState === "active" ? "text-[#af40ff] border rounded" : "text-black"}`}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`px-2 py-1 ${filterState === "completed" ? "text-[#af40ff] border rounded" : "text-black"}`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      <div className="flex justify-end">
        <button className="hover:text-black" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

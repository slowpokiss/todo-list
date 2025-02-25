import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux-toolkit/mainSlice";
import '../css/CheckBoxComponent.css'

interface checkBoxComponentProps {
  description?: string;
  id: number;
  completed: boolean;
  time: string;
}

export default function CheckBoxComponent({ description, id, completed, time }: checkBoxComponentProps) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <div className="checkmark" />
      <div className="description w-full">{description}</div>
      {time && <div className="time">{time}</div>}
    </label>
  );
}

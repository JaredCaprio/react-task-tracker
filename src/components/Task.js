import { FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3>
        {task.text || <Skeleton />}
        <FaTimes
          onClick={onDelete}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <div>{task.day || <Skeleton count={10} />}</div>
    </div>
  );
}

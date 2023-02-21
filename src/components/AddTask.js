import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("PLease enter task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          onChange={(e) => setDay(e.target.value)}
          value={day}
          placeholder="Day"
        />
      </div>
      <div className="form-control-check">
        <label htmlFor="reminder">Reminder</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>
      <input type="submit" value="save Task" className="btn btn-block" />
    </form>
  );
}

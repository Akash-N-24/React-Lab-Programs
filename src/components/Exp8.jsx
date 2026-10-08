import React, { useMemo, useState } from 'react';

export default function Exp8() {
  const [reminders, setReminders] = useState([]);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addReminder = (event) => {
    event.preventDefault();
    if (!task.trim() || !dueDate) return;
    setReminders((current) => [...current, { id: Date.now(), task: task.trim(), dueDate, description, completed: false }]);
    setTask('');
    setDueDate('');
    setDescription('');
  };

  const visible = useMemo(() => {
    if (filter === 'completed') return reminders.filter((item) => item.completed);
    if (filter === 'pending') return reminders.filter((item) => !item.completed);
    return reminders;
  }, [reminders, filter]);

  return (
    <section className="lab-program">
      <h1>Program 8: Reminder Application</h1>
      <p>Add tasks with due dates and filter them by completion status.</p>
      <form onSubmit={addReminder} className="react-form">
        <label>Task<input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task name" /></label>
        <label>Due date<input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></label>
        <label>Description<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional description" /></label>
        <button type="submit">Add reminder</button>
      </form>
      <div className="filter-row">{['all','completed','pending'].map((value) => <button key={value} onClick={() => setFilter(value)}>{value}</button>)}</div>
      <div className="reminder-list">
        {visible.map((item) => (
          <article className={item.completed ? 'reminder completed' : 'reminder'} key={item.id}>
            <label><input type="checkbox" checked={item.completed} onChange={() => setReminders((current) => current.map((r) => r.id === item.id ? { ...r, completed: !r.completed } : r))} /> <strong>{item.task}</strong></label>
            <small>Due: {item.dueDate}</small>
            {item.description && <p>{item.description}</p>}
          </article>
        ))}
        {!visible.length && <p className="muted">No reminders match this filter.</p>}
      </div>
    </section>
  );
}
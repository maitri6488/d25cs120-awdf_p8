import React, { useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Understand React.lazy and dynamic import()', completed: true },
    { id: 2, title: 'Wrap Routes in <Suspense> with Fallback UI', completed: true },
    { id: 3, title: 'Inspect Network tab for separate JS chunks', completed: false },
    { id: 4, title: 'Compare baseline and optimized bundle size', completed: false }
  ]);
  const [newTitle, setNewTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTitle.trim(), completed: false }]);
    setNewTitle('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 className="page-title">Tasks & Practical Checklist</h2>
        <span style={{ fontSize: '0.85rem', color: '#586069' }}>
          {completedCount} / {tasks.length} Completed
        </span>
      </div>
      <span className="info-badge">Lazy Chunk: Tasks-[hash].js (Loaded on demand)</span>

      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        <input
          type="text"
          placeholder="Add a new practical task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flex: 1 }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span>{task.title}</span>
            </label>
            <button
              type="button"
              className="btn-danger"
              style={{ padding: '3px 8px', fontSize: '0.8rem' }}
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;

import React, { useState } from 'react';
import { Container, Button, Form, ListGroup } from 'react-bootstrap';
import './taskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <Container className="task-manager">
      <h2>Task Manager</h2>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskManager;

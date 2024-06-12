import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './taskTracker.css';

const TaskTracker = ({ tasks }) => {
  return (
    <Container className="task-tracker">
      <h2>Task Tracker</h2>
      <ListGroup>
        {tasks.filter(task => task.completed).map((task, index) => (
          <ListGroup.Item key={index}>
            {task.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskTracker;

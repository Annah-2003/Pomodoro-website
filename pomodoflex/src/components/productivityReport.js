import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './productivityReport.css';

const ProductivityReport = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <Container className="productivity-report">
      <h2>Productivity Report</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Total Tasks</th>
            <th>Completed Tasks</th>
            <th>Completion Rate</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{totalTasks}</td>
          <td>{completedTasks}</td>
          <td>{((completedTasks / totalTasks) * 100).toFixed(2)}%</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);
};

export default ProductivityReport;

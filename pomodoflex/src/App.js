import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FocusZone from './components/focusZone';
import TaskManager from './components/taskManager';
import TaskTracker from './components/taskTracker';
import ProductivityReport from './components/productivityReport';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<FocusZone />} />
          <Route path="/task-manager" element={<TaskManager tasks={tasks} setTasks={setTasks} />} />
          <Route path="/task-tracker" element={<TaskTracker tasks={tasks} />} />
          <Route path="/productivity-report" element={<ProductivityReport tasks={tasks} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

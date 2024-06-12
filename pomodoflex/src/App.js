import React, { useState } from 'react';
import { BrowseRoute as Route, Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FocusZone from './components/focusZone';
import TaskManager from './components/taskManager';
import TaskTracker from './components/taskTracker';
import ProductivityReport from './components/productivityReport';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);


  return(
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={FocusZone}/>
          <Route path="/task-manager" component={() => <TaskManager tasks={tasks} setTasks={setTasks} />}/>
          <Route path="/task-tracker" component={() => <TaskTracker tasks={tasks} />}/>
          <Route path="/productivity-report" component={() => <ProductivityReport tasks={tasks} />} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};



export default App;

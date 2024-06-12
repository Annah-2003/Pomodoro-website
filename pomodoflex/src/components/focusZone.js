import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './focusZone.css';

const FocusZone = () => {
  const [theme, setTheme] = useState('default');
  const [sound, setSound] = useState('none');
  const [task, setTask] = useState('');
  const [isFocusing, setIsFocusing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleSoundChange = (e) => setSound(e.target.value);
  const handleTaskChange = (e) => setTask(e.target.value);

  const handleFocusStart = () => {
    setIsFocusing(true);
  };

  useEffect(() => {
    if (isFocusing && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsFocusing(false);
      alert('Focus session completed!');
    }
  }, [isFocusing, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Container className={`focus-zone ${theme}`}>
      <h2>Dynamic Focus Zones</h2>
      {!isFocusing ? (
        <>
          <Form>
            <Form.Group>
              <Form.Label>Theme</Form.Label>
              <Form.Control as="select" value={theme} onChange={handleThemeChange}>
                <option value="default">Default</option>
                <option value="reading">Reading</option>
                <option value="coding">Coding</option>
                <option value="brainstorming">Brainstorming</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Ambient Sound</Form.Label>
              <Form.Control as="select" value={sound} onChange={handleSoundChange}>
                <option value="none">None</option>
                <option value="rain">Rain</option>
                <option value="forest">Forest</option>
                <option value="waves">Waves</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Task</Form.Label>
              <Form.Control type="text" value={task} onChange={handleTaskChange} placeholder="What are you working on?" />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={handleFocusStart}>Start Focus Session</Button>
        </>
      ) : (
        <div className="focus-session">
          <h3>{task}</h3>
          <h4>Time Left: {formatTime(timeLeft)}</h4>
        </div>
      )}
    </Container>
  );
};

export default FocusZone;

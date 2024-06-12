import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './focusZone.css';

const FocusZone = () => {
  const [theme, setTheme] = useState('default');
  const [sound, setSound] = useState('none');

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleSoundChange = (e) => setSound(e.target.value);

  return (
    <Container className={`focus-zone ${theme}`}>
      <h2>Dynamic Focus Zones</h2>
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
      </Form>
      <Button variant="primary">Start Focus Session</Button>
    </Container>
  );
};

export default FocusZone;

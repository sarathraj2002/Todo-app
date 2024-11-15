import React from 'react'

const Home = () => {
  return (
    <>
        <h2>TODO LIST</h2>
        <p>A to-do list is a list of tasks that need to be completed, usually organized by priority. To-do lists can be used to manage personal and professional tasks, such as household chores, work assignments, or team check-ins.</p>
    
        import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
    </>
  );
}

export default CheckboxesExample;
    </>
  )
}

export default Home
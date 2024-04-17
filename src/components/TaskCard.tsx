// import { useState } from 'react';
import { TaskType } from '../types';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type TaskCardProps = {
    task: TaskType
}

export default function TaskCard({ task }: TaskCardProps) {

    // const [isComplete, setIsComplete] = useState(false);

    // const handleSwitch = () => {
    //     setIsComplete(!isComplete)
    // }

  return (
    <Card className='m-3' bg='dark' text='white'>
      <Card.Header>Due -- {task.dueDate}</Card.Header>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Subtitle>Completed status: { task.completed} </Card.Subtitle>
        <Form.Check type="switch" id="custom-switch" label="=> Complete"></Form.Check>
      </Card.Body>
    </Card>
  )
}
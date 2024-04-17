import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TaskFormDataType } from '../types';

type TaskFormProps = {
    addNewTask: (data:TaskFormDataType) => void;
}

export default function TaskForm({ addNewTask }: TaskFormProps) {

    const [newTask, setNewTask] = useState<TaskFormDataType>({title: '', description: '', dueDate: '', completed: false}); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({...newTask, [event.target.name]:event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewTask(newTask)
    }

  return (
    <Card className='my-2'>
            <Card.Body>
                <h3 className="text-center">Create New Task</h3>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control name='title' placeholder="What's next on your to-do list?" value={newTask.title} onChange={handleInputChange} />
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control name='description' placeholder='Now for the details...' value={newTask.description} onChange={handleInputChange} />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name='dueDate' placeholder='When we knocking this out by?' value={newTask.dueDate} onChange={handleInputChange} />
                    <Button className='mt-3 w-100' variant='success' type='submit'>Add To My List</Button>
                </Form>
            </Card.Body>
        </Card>
  )
}
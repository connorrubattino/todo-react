import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import { TaskFormDataType, TaskType } from '../types';



type HomeProps = {}
export default function Home({}: HomeProps) {
  
  const [showForm, setShowForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [tasks, setTasks] = useState<TaskType[]>([
    {
        title: 'Finish HW',
        description: 'Very similar to class today, so should not be too tough, but need to make sure I am understanding how all the parts work together.',
        dueDate: '4/17/24 7:30AM',
        completed: false,
    },
    {
        title: 'Watch Warriors',
        description: 'Need to win this play in game and hopw the pelicans lose theirs as well',
        dueDate: '4/16/24 7:30PM',
        completed: false,
    },
    {
        title: 'Drink more water',
        description: 'Hydration is key',
        dueDate: '4/19/24 7:30PM',
        completed: false,
    }
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
}

  const addNewTask = (newTaskData: TaskFormDataType) => {
    const newTask: TaskType = {...newTaskData};
    setTasks([...tasks, newTask]);
    setShowForm(false);

  }


    return (
    <>
        <h3 className='text-center mt-3'>Welcome to your Tasks list! Let's have a productive day!</h3>
        <Row className='p-3'>
            <Col md={6}>
                <Form.Control value={searchTerm} placeholder='Find a Task' onChange={handleInputChange}/>
            </Col>
            <Col>
                <Button className='w-100' variant='primary' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide From' : 'Add Task!'}</Button>
            </Col>
        </Row>
        {showForm && <TaskForm addNewTask={addNewTask}/>}
        {tasks.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map(t => <TaskCard task={t}/>)}
    </>
  )
}
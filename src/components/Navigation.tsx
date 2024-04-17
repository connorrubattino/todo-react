import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


type NavigationProps = {}

export default function Navigation({}: NavigationProps){


    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href='/'>To-Do App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
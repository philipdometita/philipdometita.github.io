import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

import { NavLink } from 'react-router-dom'
import { projects } from '../utils/projects'

import PDlogo from '../assets/PDlogo.png'

export default function NavBar() {

    return (
        <Navbar collapseOnSelect className='navbar' variant='light' expand='sm' sticky='top'>
            <Navbar.Brand as={NavLink} to='/' state={{ section: 'Title' }}> 
                <img
                    src={PDlogo}
                    width='45'
                    height='45'
                    className='PDlogo'
                    alt=""
                /> {' '}
                Philip A. Dometita
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='me-auto'>
                    <NavDropdown title='Projects'>
                        {projects.map((project, index) => {
                            return (
                                <NavDropdown.Item as={NavLink} to={`/Projects/${project.component}`} key={index}>{project.name}</NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/' state={{ section: 'AboutMe' }}>About Me</Nav.Link>
                    <Nav.Link as={NavLink} to='/' state={{ section: 'ContactMe' }}>Contact Me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        
    )
}
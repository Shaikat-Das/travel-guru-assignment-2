import React from 'react';
import './Header.css'
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div>
           <div>
           <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/Home">LET's GO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/Booking">Booking</Nav.Link>
                            <Nav.Link href="/Authentication">Sign Up</Nav.Link>
                            <Nav.Link href="/Search">Search</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
            </Navbar>
           </div>

        </div>
    );
};

export default Header;
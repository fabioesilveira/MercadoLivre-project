import { Link, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="warning" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Playstation</Nav.Link>
                        <Nav.Link as={NavLink} to="/xbox">Xbox</Nav.Link>
                        <Nav.Link as={NavLink} to="/nintendo">Nintendo</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
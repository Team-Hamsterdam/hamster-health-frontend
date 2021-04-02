import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const Navbar1 = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="#home">Hamster Health</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Button className="mx-1">Sign Up</Button>
                    <Button className="mx-1">Sign In</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;

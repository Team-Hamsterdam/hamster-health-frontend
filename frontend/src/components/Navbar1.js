import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
const Navbar1 = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Image style={{ width: 60, height: 60 }} src={logo} />
            <Navbar.Brand href="/">Hamster Health</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <a className="btn btn-primary mx-1 my-1" href="/register">
                        Sign Up
                    </a>
                    <a className="btn btn-primary mx-1 my-1" href="/login">
                        Sign In
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import Row from "react-bootstrap/Row";
import { Link, NavLink } from "react-router-dom";

const Navbar1 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="#27187eff" variant="dark">
            <Navbar.Brand
                as={Link}
                to="/tasks"
                className="mr-auto"
                style={{ fontSize: 45 }}
            >
                <Row>
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                        }}
                        src={logo}
                        className="d-inline-block align-top"
                    />{" "}
                    <span className="text-color-secondary">Hamster</span> Health
                </Row>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    variant="pills"
                    className="ml-auto"
                    defaultActiveKey="/tasks"
                >
                    <Nav.Link as={NavLink} to="/tasks" className="mx-2">
                        Task
                    </Nav.Link>
                    <Nav.Link as={NavLink} className="mx-2" to="/progress">
                        Progress
                    </Nav.Link>
                    <Nav.Link as={NavLink} className="mx-2" to="/leaderboard">
                        Leaderboard
                    </Nav.Link>
                    <Nav.Link as={NavLink} className="mx-2" to="/profile">
                        Profile
                    </Nav.Link>
                    <Nav.Link as={NavLink} className="mx-2" to="/rank">
                        Rank
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        className="mx-2"
                        exact
                        to="/"
                        onClick={() => {
                            localStorage.removeItem("token");
                        }}
                    >
                        Sign Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;

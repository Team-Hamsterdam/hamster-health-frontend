import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import Row from "react-bootstrap/Row";

const Navbar1 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="#27187eff" variant="dark">
            <Navbar.Brand
                href="/tasks"
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
                    <span class="text-color-secondary">Hamster</span> Health
                </Row>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    variant="pills"
                    className="ml-auto"
                    defaultActiveKey="/tasks"
                >
                    <Nav.Link href="/tasks" className="mx-2">
                        Task
                    </Nav.Link>
                    <Nav.Link className="mx-2" href="/progress">
                        Progress
                    </Nav.Link>
                    <Nav.Link className="mx-2" href="/leaderboard">
                        Leaderboard
                    </Nav.Link>
                    <Nav.Link className="mx-2" href="/profile">
                        Profile
                    </Nav.Link>
                    <Nav.Link className="mx-2" href="/rank">
                        Rank
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;

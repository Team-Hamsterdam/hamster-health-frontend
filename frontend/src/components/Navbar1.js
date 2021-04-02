import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
const Navbar1 = () => {
    return (
        <Navbar variant="dark" expand="lg" className="my-0 py-0">
            <Navbar.Brand href="/">
                <Image style={{ width: 50, height: 50 }} src={logo} />
                <span
                    className="px-2 h-100 my-2"
                    style={{ color: "#ff8600ff", fontSize: 24 }}
                >
                    Hamster Health
                </span>
            </Navbar.Brand>

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

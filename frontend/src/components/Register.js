import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./layout/Header";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <React.Fragment>
            <Header
                navPosition="right"
                className="reveal-from-bottom d-none d-md-block d-lg-block d-xl-block"
            />
            <Container
                md={12}
                className="rounded px-0 justify-content-center align-items-center"
            >
                <Row className="center">
                    <Row
                        className="w-100 rounded"
                        style={{ backgroundColor: "#758bfd" }}
                    >
                        <Col
                            md={6}
                            className="w-100 px-0 mx-0 py-2 rounded"
                            style={{ backgroundColor: "#758bfd" }}
                        >
                            <Form>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <h2 className="formHeader w-100 text-center my-4">
                                        Register
                                    </h2>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicUsername"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="username"
                                            placeholder="Username"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicName"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="name"
                                            placeholder="Name"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicConfirmPassword"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row
                                    className="justify-content-md-center"
                                    md={12}
                                >
                                    <div className="w-100 text-center">
                                        <Button
                                            className="mt-2 mb-4"
                                            variant="primary"
                                            type="submit"
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </Row>
                                <Row md={12}></Row>
                            </Form>
                        </Col>
                        <Col
                            md={6}
                            className="w-100 formImage py-2 px-0 mx-0 rounded"
                        >
                            <Row md={12} className="justify-content-md-center">
                                <h3
                                    className="w-100 text-center"
                                    style={{ marginTop: 30 }}
                                    id="formHeader"
                                >
                                    Welcome to Hamster Health
                                </h3>
                            </Row>
                            <Row
                                md={12}
                                className="justify-content-md-center m-auto"
                            >
                                <Link to="/">
                                    <Image
                                        className="mx-auto"
                                        style={{
                                            width: 125,
                                            height: 125,
                                            cursor: "pointer",
                                        }}
                                        src={logo}
                                    />
                                </Link>
                            </Row>
                            <Row md={12} className="justify-content-md-center">
                                <p
                                    className="w-100 text-center"
                                    style={{ color: "#4e52be" }}
                                >
                                    Register to start working towards your
                                    goals!
                                </p>
                            </Row>
                            <Row md={12} className="justify-content-md-center">
                                <p
                                    className="w-100 text-center mt-2 mb-1"
                                    style={{ fontSize: 15, color: "#4e52be" }}
                                >
                                    Already have an account?
                                </p>
                            </Row>
                            <Row md={12} className="justify-content-md-center">
                                <div className="w-100 text-center">
                                    <Link
                                        to="/login"
                                        id="loginBtn"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Register;

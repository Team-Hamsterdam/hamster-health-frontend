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
import { useState } from "react";
const Login = ({ api }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const postLoginInfo = async () => {
        if (!username) {
            console.log("username can't be empty");
            return;
        }
        if (!password) {
            console.log("password can't be empty");
            return;
        }

        const body = {
            username: username,
            password: password,
        };
        console.log(api);
        const res = await fetch(`${api}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const message = `An error has occured: ${res.status}`;
            throw new Error(message);
        }

        const token = await res.json();

        window.sessionStorage.setItem("token", token);
    };
    return (
        <>
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
                        style={{ backgroundColor: "#758bfd", minHeight: 600 }}
                    >
                        <Col
                            md={6}
                            className="w-100 formImage py-2 px-0 mx-0 rounded"
                        >
                            <Row md={12} className="justify-content-center">
                                <h3
                                    className="w-100 text-center"
                                    style={{ marginTop: 30 }}
                                    id="formHeader"
                                >
                                    Welcome back to Hamster Health
                                </h3>
                            </Row>
                            <Row
                                md={12}
                                className="justify-content-center m-auto"
                            >
                                <Link to="/">
                                    <div className="text-center">
                                        <Image
                                            className=" "
                                            style={{
                                                width: 125,
                                                height: 125,
                                                cursor: "pointer",
                                            }}
                                            src={logo}
                                        />
                                    </div>
                                </Link>
                            </Row>
                            <Row md={12} className="justify-content-center">
                                <p
                                    className="w-100 text-center"
                                    style={{ color: "#4e52be" }}
                                >
                                    Continue reaching your goals!
                                </p>
                            </Row>
                            <Row md={12} className="justify-content-center">
                                <p
                                    className="w-100 text-center mt-2 mb-1"
                                    style={{ fontSize: 15, color: "#4e52be" }}
                                >
                                    Need an account?
                                </p>
                            </Row>
                            <Row md={12} className="justify-content-center">
                                <div className="w-100 text-center">
                                    <Link
                                        to="/register"
                                        id="loginBtn"
                                        className="btn btn-primary"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </Row>
                        </Col>
                        <Col
                            md={6}
                            className="w-100 px-0 mx-0 py-2 rounded"
                            style={{ backgroundColor: "#758bfd" }}
                        >
                            <Form>
                                <Row className="justify-content-center" md={12}>
                                    <h2 className="formHeader w-100 text-center my-4">
                                        Log In
                                    </h2>
                                </Row>
                                <Row className="justify-content-center" md={12}>
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicUsername"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="username"
                                            placeholder="Username"
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="justify-content-center" md={12}>
                                    <Form.Group
                                        className="w-100 px-4"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            className="inputBox"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="justify-content-center" md={12}>
                                    <div className="w-100 text-center">
                                        <Button
                                            className="mt-2 mb-4"
                                            variant="primary"
                                            type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log(username, password);
                                                postLoginInfo();
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </Row>
                                <Row md={12}></Row>
                            </Form>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Login;

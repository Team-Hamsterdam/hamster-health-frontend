import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import Container from "react-bootstrap/Container";

const Register = () => {
    return (
        <>  
            <Container className='vertical-center' id='formContainer'>
                <Form className='registerForm'>
                    <h2 className='formHeader'>Register</h2>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control className='inputBox' type="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control className='inputBox' type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className='inputBox' type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className='inputBox' type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control className='inputBox' type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button id='registerBtn' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <div className='formImage'>
                    <h3 className='formHeader'> <span style={{color: "#4e52be" }}>Welcome to Hamster Health</span></h3>
                    <Image style={{ width: 125, height: 125 }} src={logo} />
                    Register to start working towards your goals!<br/>

                    <span style={{fontSize: 15 }}>
                        Already have an account?
                    </span>
                    <Button id='loginBtn' variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default Register;

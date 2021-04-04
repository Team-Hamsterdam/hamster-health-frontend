import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateAlert from "./CreateAlert";
import Header from "./layout/Header";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { api } from "./Api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("danger");
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const postRegisterInfo = async () => {
    if (!username) {
      setShowAlert(true);
      setAlertText("Username can't be empty");
      return;
    }
    if (!name) {
      setShowAlert(true);
      setAlertText("Name can't be empty");
      return;
    }

    if (!email) {
      setShowAlert(true);
      setAlertText("Email can't be empty");
      return;
    }

    if (!password1 || !password2) {
      setShowAlert(true);
      setAlertText("Passwords can't be empty");
      return;
    }

    if (password1 !== password2) {
      setShowAlert(true);
      setAlertText("Passwords must match");
      return;
    }

    const body = {
      username: username,
      password: password1,
      email: email,
      name: name,
    };

    try {
      const res = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        history.push("/login");
      } else {
        setShowAlert(true);
        setAlertText(`${data.message}`);
      }
    } catch (e) {
      console.warn(e);
      setShowAlert(true);
      setAlertText(`An unexpected error has occured`);
    }
  };
  return (
    <>
      <Header
        navPosition="right"
        className="reveal-from-bottom d-none d-md-block d-lg-block d-xl-block"
      />
      <Container md={12} className="rounded px-0 justify-content-center align-items-center">
        <Row className="center">
          <Row className="w-100 rounded" style={{ backgroundColor: "#758bfd", minHeight: 600 }}>
            <Col
              md={6}
              className="w-100 px-0 mx-0 py-2 rounded"
              style={{ backgroundColor: "#758bfd" }}
            >
              <Form>
                <Row className="justify-content-center" md={12}>
                  <h2 className="formHeader w-100 text-center my-4">Register</h2>
                </Row>
                <Row className="justify-content-center" md={12}>
                  <CreateAlert
                    text={alertText}
                    type={alertType}
                    show={showAlert}
                    setShow={setShowAlert}
                  />
                </Row>
                <Row className="justify-content-center" md={12}>
                  <Form.Group className="w-100 px-4" controlId="formBasicUsername">
                    <Form.Control
                      className="inputBox"
                      type="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="justify-content-center" md={12}>
                  <Form.Group className="w-100 px-4" controlId="formBasicName">
                    <Form.Control
                      className="inputBox"
                      type="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="justify-content-center" md={12}>
                  <Form.Group className="w-100 px-4" controlId="formBasicEmail">
                    <Form.Control
                      className="inputBox"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="justify-content-center" md={12}>
                  <Form.Group className="w-100 px-4" controlId="formBasicPassword">
                    <Form.Control
                      className="inputBox"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword1(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="justify-content-center" md={12}>
                  <Form.Group className="w-100 px-4" controlId="formBasicConfirmPassword">
                    <Form.Control
                      className="inputBox"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => setPassword2(e.target.value)}
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
                        console.log(username, name, email, password1, password2);
                        postRegisterInfo();
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </Row>
                <Row md={12}></Row>
              </Form>
            </Col>
            <Col md={6} className="w-100 formImage py-2 px-0 mx-0 rounded">
              <Row md={12} className="justify-content-center">
                <h3 className="w-100 text-center" style={{ marginTop: 30 }} id="formHeader">
                  Welcome to Hamster Health
                </h3>
              </Row>
              <Row md={12} className="justify-content-center">
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
              <Row md={12} sm={3} className="justify-content-center">
                <p className="w-100 text-center" style={{ color: "#4e52be" }}>
                  Start working towards your goals!
                </p>
              </Row>
              <Row md={12} className="justify-content-center">
                <p
                  className="w-100 text-center mt-2 mb-1"
                  style={{ fontSize: 15, color: "#4e52be" }}
                >
                  Already have an account?
                </p>
              </Row>
              <Row md={12} className="justify-content-center">
                <div className="w-100 text-center">
                  <Link to="/login" id="loginBtn" className="btn btn-primary">
                    Login
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Register;

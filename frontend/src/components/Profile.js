import React, { useEffect, useState } from "react";
import { api } from "./Api";
import Navbar1 from "./Navbar1";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loadUser = async () => {
      try {
        const res = await fetch(`${api}/user/details`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();
        return data;
      } catch (e) {
        console.warn(e);
      }
    };
    const getUsers = async () => {
      const infoFromServer = await loadUser();
      if (infoFromServer) {
        setUsername(infoFromServer.user.username);
        setXp(infoFromServer.user.xp);
        setLevel(infoFromServer.user.level);
      } else {
        setUsername("Hamsterdam");
        setXp(15);
        setLevel(69);
      }
    };
    getUsers();
  }, []);

  const xp_threshold = 20;
  const progressPercentage = (xp / xp_threshold) * 100;

  return (
    <>
      <Navbar1 />

      <Container className="max-height pt-1" style={{ backgroundColor: "#27187E" }}>
        <Row md={12}>
          <Col md={12} style={{ backgroundColor: "#31278E" }}>
            <h1 className="text-center">
              {username} <span style={{ color: "#ff8600ff" }}>lv.{level}</span>
            </h1>
          </Col>

          <Col md={12}>
            <h2 className="text-center">
              Experience: {xp}/{xp_threshold} ({progressPercentage}%)
            </h2>
          </Col>

          <Col md={{ span: 8, offset: 2 }}>
            <ProgressBar className="text-center" now={progressPercentage} />
          </Col>

          <Col md={12}>
            <p className="text-center mt-2">Keep up the good work!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;

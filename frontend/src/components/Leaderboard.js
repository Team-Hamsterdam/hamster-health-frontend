import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import taskbackground from "../assets/images/taskbackground.png";
import Navbar1 from "./Navbar1";
import { api } from "./Api";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const [username, setUsername] = useState("");
  const [level, setLevel] = useState(0);
  const [rank, setRank] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`${api}/user/list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();
        return data;
      } catch {
        console.log("Error getting leaderboard");
        console.log(leaderboard);
      }
    };
    const getLeaderboard = async () => {
      const leaderboardFromServer = await fetchLeaderboard();
      console.log(leaderboardFromServer);
      if (leaderboardFromServer) {
        sortMap(leaderboardFromServer.users);
        setLeaderboard(leaderboardFromServer.users);
      } else {
        setLeaderboard([
          {
            username: "Stevenson",
            level: 100,
          },
          {
            username: "Matthewson",
            level: 5,
          },
          {
            username: "Raymondson",
            level: 66,
          },
          {
            username: "Michaelson",
            level: 7,
          },
          {
            username: "Johnson",
            level: 5,
          },
          {
            username: "Appleson",
            level: 69,
          },
          {
            username: "Bananason",
            level: 87,
          },
          {
            username: "Orangeson",
            level: 2,
          },
          {
            username: "Guitarson",
            level: 99,
          },
          {
            username: "Violinson",
            level: 15,
          },
          {
            username: "Jackson",
            level: 17,
          },
          {
            username: "Jaxon",
            level: 16,
          },
          {
            username: "Hamsterson",
            level: 100,
          },
          {
            username: "Stevenson",
            level: 100,
          },
          {
            username: "Matthewson",
            level: 5,
          },
          {
            username: "Raymondson",
            level: 66,
          },
          {
            username: "Michaelson",
            level: 7,
          },
          {
            username: "Johnson",
            level: 5,
          },
          {
            username: "Appleson",
            level: 69,
          },
          {
            username: "Bananason",
            level: 87,
          },
          {
            username: "Orangeson",
            level: 2,
          },
          {
            username: "Guitarson",
            level: 99,
          },
          {
            username: "Violinson",
            level: 15,
          },
          {
            username: "Jackson",
            level: 17,
          },
          {
            username: "Jaxon",
            level: 16,
          },
          {
            username: "Hamsterson",
            level: 100,
          },
          {
            username: "Stevenson",
            level: 100,
          },
          {
            username: "Matthewson",
            level: 5,
          },
          {
            username: "Raymondson",
            level: 66,
          },
          {
            username: "Michaelson",
            level: 7,
          },
          {
            username: "Johnson",
            level: 5,
          },
          {
            username: "Appleson",
            level: 69,
          },
          {
            username: "Bananason",
            level: 87,
          },
          {
            username: "Orangeson",
            level: 2,
          },
          {
            username: "Guitarson",
            level: 99,
          },
          {
            username: "Violinson",
            level: 15,
          },
          {
            username: "Jackson",
            level: 17,
          },
          {
            username: "Jaxon",
            level: 16,
          },
          {
            username: "Hamsterson",
            level: 100,
          },
          {
            username: "Stevenson",
            level: 100,
          },
          {
            username: "Matthewson",
            level: 5,
          },
          {
            username: "Raymondson",
            level: 66,
          },
          {
            username: "Michaelson",
            level: 7,
          },
          {
            username: "Johnson",
            level: 5,
          },
          {
            username: "Appleson",
            level: 69,
          },
          {
            username: "Bananason",
            level: 87,
          },
          {
            username: "Orangeson",
            level: 2,
          },
          {
            username: "Guitarson",
            level: 99,
          },
          {
            username: "Violinson",
            level: 15,
          },
          {
            username: "Jackson",
            level: 17,
          },
          {
            username: "Jaxon",
            level: 16,
          },
          {
            username: "Hamsterson",
            level: 100,
          },
          {
            username: "Stevenson",
            level: 100,
          },
          {
            username: "Matthewson",
            level: 5,
          },
          {
            username: "Raymondson",
            level: 66,
          },
          {
            username: "Michaelson",
            level: 7,
          },
          {
            username: "Johnson",
            level: 5,
          },
          {
            username: "Appleson",
            level: 69,
          },
          {
            username: "Bananason",
            level: 87,
          },
          {
            username: "Orangeson",
            level: 2,
          },
          {
            username: "Guitarson",
            level: 99,
          },
          {
            username: "Violinson",
            level: 15,
          },
          {
            username: "Jackson",
            level: 17,
          },
          {
            username: "Jaxon",
            level: 16,
          },
          {
            username: "Hamsterson",
            level: 100,
          },
        ]);
      }
    };

    const loadUser = async () => {
      try {
        console.log("token is", token);
        const res = await fetch(`${api}/user/details`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();
        return data;
      } catch {
        console.log("Error loading user info");
      }
    };
    const getUsers = async () => {
      const infoFromServer = await loadUser();
      if (infoFromServer) {
        setUsername(infoFromServer.username);
        setLevel(infoFromServer.level);
        setRank(infoFromServer.rank);
      } else {
        setUsername('Jesuson');
        setLevel(69);
        setRank(7);
      }
    };
    getUsers();
    getLeaderboard();
  }, []);

  const sortMap = (obj) => {
    obj.sort((a, b) => (a.level < b.level ? 1 : -1));
  };

  const max_leaderboard = 50;

  return (
    <>
      <Navbar1 />
      <Container className="max-height pt-1" style={{ backgroundColor: "#27187E" }}>
        <Row md={12}>
          <Col md={12} style={{ backgroundColor: "#31278E" }}>
            <h1 className="text-center">Leaderboard</h1>
          </Col>


          <Col className="py-2 mb-2" md={12} style={{ backgroundColor: "#4E52BE" }}>
            <Row className="px-2" md={12}>
                <Col
                    className="userEntry my-1 rounded"
                    style={{
                    backgroundColor: "#ff8600ff",
                    border: "solid #ff8600ff",
                    }}
                    md={12}
                >
                    <b style={{ color: "white" }}>
                    {rank}. {username}
                    </b>
                    <b className="float-right" style={{ color: "white" }}>
                    Level {level}
                    </b>
                </Col>
            </Row>
        </Col>


          <Col className="py-2" md={12} style={{ backgroundColor: "#4E52BE" }}>
            {leaderboard &&
              leaderboard.slice(0, max_leaderboard).map((user, index) => (
                <Row className="px-2" key={index} md={12}>
                  <Col
                    className="userEntry my-1 rounded"
                    style={{
                      backgroundColor: "#ff8600ff",
                      border: "solid #ff8600ff",
                    }}
                    md={12}
                  >
                    <b style={{ color: "white" }}>
                      {index + 1}. {user.username}
                    </b>
                    <b className="float-right" style={{ color: "white" }}>
                      Level {user.level}
                    </b>
                  </Col>
                </Row>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Leaderboard;

import React, { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import taskbackground from "../assets/images/taskbackground.png";
import Navbar1 from "./Navbar1";

const Tasks = () => {
    const api = "http://localhost:4000";

    const [tasks, setTasks] = useState([]);
    const [taskPreview, setTaskPreview] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchTasks = async () => {
            try {
                const res = await fetch(`${api}/task/gettasks`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                });

                const data = await res.json();
                return data.tasks;
            } catch {
                console.log("Error getting tasks");
                console.log(tasks);
            }
        };
        const getTasks = async () => {
            // const tasksFromServer = await fetchTasks();
            // setTasks(tasksFromServer);
            setTasks([
                {
                    id: 1,
                    title: "Run 5km",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 2,
                    title: "Sleep for 24 hours",
                    desc: "run 5km??2",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 3,
                    title: "Run 5000000km",
                    desc: "run 5km??3",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 4,
                    title: "Swim 500000000km",
                    desc: "run 5km??4",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 5,
                    title: "Run 5km",
                    desc: "run 5km??5",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 6,
                    title: "Run 5km",
                    desc: "run 5km??6",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 7,
                    title: "Run 5km",
                    desc: "run 5km??7",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 8,
                    title: "Run 5km",
                    desc: "run 5km??8",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 9,
                    title: "Run 5km",
                    desc: "run 5km??9",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 10,
                    title: "Run 5km",
                    desc: "run 5km??9",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 11,
                    title: "Run 5km",
                    desc: "run 5km??9",
                    xp: "20",
                    is_custom: false,
                },
            ]);
        };
        getTasks();
    }, []);

    const removeTask = (id) => {
        const newTasks = tasks;
        newTasks.splice(id, 1);
        setTasks(newTasks);
        setTaskPreview(-1);
        console.log("task preview is ", taskPreview);
    };

    const max_tasks = 10;
    return (
        <>
            <Navbar1 />
            <Container
                className="max-height pt-1"
                style={{ backgroundColor: "#27187E" }}
            >
                <Row md={12}>
                    <Col md={4} style={{ backgroundColor: "#31278E" }}>
                        <h1 className="text-center">Tasks</h1>
                        <h4 className="text-center">
                            {moment().format("dddd, Do MMMM YYYY")}
                        </h4>
                        {tasks &&
                            tasks.map((task, id) => (
                                <Row key={id} md={12}>
                                    <Col className="">
                                        <Button
                                            variant="dark"
                                            className="w-100 my-1 text-left"
                                            id="task-button"
                                            rounded="true"
                                            onClick={() => setTaskPreview(id)}
                                            style={
                                                id === taskPreview
                                                    ? {
                                                          backgroundColor:
                                                              "#fca13eff",
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              "#31278E",
                                                          color: "#fca13eff",
                                                      }
                                            }
                                        >
                                            <b>{task.title}</b>
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                        <Row md={12}>
                            <Col>
                                {tasks.length <= max_tasks ? (
                                    <Button
                                        className="w-100 mx-0"
                                        variant="dark"
                                        id="task-button2"
                                        style={{
                                            backgroundColor: "#31278E",
                                        }}
                                    >
                                        Create New Task
                                    </Button>
                                ) : (
                                    ""
                                )}
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        md={8}
                        style={{
                            backgroundColor: "#31278E",
                        }}
                    >
                        <Row
                            md={12}
                            className="mt-4 mb-4"
                            id="task-desc"
                            style={{
                                backgroundColor: "#4e52beff",
                            }}
                        >
                            <Col>
                                {tasks &&
                                    tasks.map((task, id) => {
                                        if (id === taskPreview) {
                                            return (
                                                <React.Fragment key={id}>
                                                    <Row
                                                        md={12}
                                                        id="task-title"
                                                        style={{
                                                            backgroundColor:
                                                                "#31278E",
                                                        }}
                                                    >
                                                        <h2 className="px-2 w-100 text-center">
                                                            {task.title}
                                                        </h2>
                                                    </Row>
                                                    <Row md={12}>
                                                        <p className="px-2 py-2">
                                                            {task.desc} actual
                                                            id is {id}
                                                        </p>
                                                    </Row>
                                                    <Row md={12}>
                                                        <Col
                                                            md={6}
                                                            className="px-2"
                                                        >
                                                            <Button
                                                                className="w-100 mx-0"
                                                                variant="dark"
                                                                id="task-button2"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#31278E",
                                                                }}
                                                            >
                                                                Mark as finished
                                                                (+
                                                                {task.xp}XP)
                                                            </Button>
                                                        </Col>
                                                        <Col
                                                            md={6}
                                                            className="px-2"
                                                        >
                                                            <Button
                                                                variant="dark"
                                                                id="task-button2"
                                                                className="w-100 mx-0"
                                                                onClick={() =>
                                                                    removeTask(
                                                                        id
                                                                    )
                                                                }
                                                                style={{
                                                                    backgroundColor:
                                                                        "#31278E",
                                                                }}
                                                            >
                                                                Remove Task
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </React.Fragment>
                                            );
                                        }
                                    })}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Tasks;

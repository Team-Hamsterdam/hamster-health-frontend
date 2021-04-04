import React, { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar1";
import CustomTasks from "./CustomTasks";

const Tasks = () => {
    const api = "http://localhost:4000";

    const [tasks, setTasks] = useState([]);
    const [ourTasks, setOurTasks] = useState([]);
    const [customTasks, setCustomTasks] = useState([]);
    const [taskPreview, setTaskPreview] = useState(0);
    const [tasksLength, setTasksLength] = useState(0);
    const [ourTasksBtn, setOurTasksBtn] = useState(false);
    const [customTasksBtn, setCustomTasksBtn] = useState(false);
    const [createTaskBtn, setCreateTaskBtn] = useState(false);
    const [customTitle, setCustomTitle] = useState("");
    const [customDesc, setCustomDesc] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchTasks = async () => {
            try {
                console.log("token is", token);
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
            ]);
            setOurTasks([
                {
                    id: 1,
                    title: "Sleep for 20 hours",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 2,
                    title: "Take a 20 minute nap",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 3,
                    title: "Eat a raw onion",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 1,
                    title: "Sleep for 20 hours",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 2,
                    title: "Take a 20 minute nap",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 3,
                    title: "Eat a raw onion",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 1,
                    title: "Sleep for 20 hours",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 2,
                    title: "Take a 20 minute nap",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 3,
                    title: "Eat a raw onion",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 1,
                    title: "Sleep for 20 hours",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 2,
                    title: "Take a 20 minute nap",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
                {
                    id: 3,
                    title: "Eat a raw onion",
                    desc: "run 5km??1",
                    xp: "20",
                    is_custom: false,
                },
            ]);
            // const tasksFromServer = await fetchTasks();
            // setTasks(tasksFromServer);
            setTasksLength(tasks.length);
        };
        getTasks();
    }, []);

    const removeTask = (id) => {
        console.log(id);

        const newTasks = tasks;
        newTasks.splice(id, 1);
        setTasks(newTasks);
        if (id === 0) {
            handleTaskClick(-1);
        }
        handleTaskClick(id - 1);
        console.log("task preview is ", taskPreview);
    };

    const handleOurTasksBtn = () => {
        setOurTasksBtn(true);
        setCustomTasksBtn(false);
        setCreateTaskBtn(false);
    };

    const handleCustomTasksBtn = () => {
        setCustomTasksBtn(true);
        setOurTasksBtn(false);
        setCreateTaskBtn(false);
    };

    const handleCreateBtn = () => {
        setCreateTaskBtn(true);
        setCustomTasksBtn(false);
        setOurTasksBtn(false);
    };

    const handleTaskClick = (id) => {
        setTaskPreview(id);
        setOurTasksBtn(false);
        setCustomTasksBtn(false);
        setCreateTaskBtn(false);
    };

    const addTask = (task) => {
        console.log(tasks.length);
        if (tasks.length < max_tasks) {
            const newTask = {
                id: tasks.length,
                title: task.title,
                desc: task.desc,
                xp: "20",
                is_custom: false,
            };
            setTasks([...tasks, newTask]);
        }
        if (tasks.length === max_tasks - 1) {
            handleTaskClick(tasks.length);
        }
    };

    const handleAddCustomTask = () => {
        console.log("added new task");
        if (customTitle.length > 0) {
            const newTask = {
                id: tasks.length,
                title: customTitle,
                desc: customDesc,
                xp: "20",
                is_custom: false,
            };
            setCustomTasks([...customTasks, newTask]);
            console.log("added new task", newTask);
        }
    };

    const max_tasks = 5;
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
                                            onClick={() => handleTaskClick(id)}
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
                                {tasks.length < max_tasks ? (
                                    <>
                                        <Row md={12}>
                                            <Col md={6} className="w-50">
                                                <Button
                                                    className="w-100 mx-0 my-1"
                                                    variant="dark"
                                                    id="task-button2"
                                                    onClick={() => {
                                                        handleOurTasksBtn();
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            "#31278E",
                                                    }}
                                                >
                                                    Our Tasks
                                                </Button>
                                            </Col>
                                            <Col md={6} className="w-50">
                                                <Button
                                                    className="w-100 mx-0 my-1"
                                                    variant="dark"
                                                    id="task-button2"
                                                    onClick={() => {
                                                        handleCustomTasksBtn();
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            "#31278E",
                                                    }}
                                                >
                                                    Your Tasks
                                                </Button>
                                            </Col>
                                        </Row>
                                    </>
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
                                {(createTaskBtn && (
                                    <Form>
                                        <Row
                                            md={12}
                                            id="task-title"
                                            className="justify-content-center h2-size"
                                            style={{
                                                backgroundColor: "#31278E",
                                            }}
                                        >
                                            <Form.Group controlId="formBasicTitle">
                                                <Form.Control
                                                    className="h2-size text-center"
                                                    type="text"
                                                    placeholder="Enter Title"
                                                    onChange={(e) =>
                                                        setCustomTitle(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Row md={12}>
                                            <Form.Group
                                                className="w-100 mt-2 mx-2"
                                                controlId="formBasicDesc"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Description"
                                                    onChange={(e) =>
                                                        setCustomDesc(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Row md={12}>
                                            <Col md={12} className="px-2">
                                                <Button
                                                    className="w-100 mx-0"
                                                    variant="dark"
                                                    id="task-button2"
                                                    type="submit"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleAddCustomTask();
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            "#31278E",
                                                    }}
                                                >
                                                    Add Task
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )) ||
                                    (customTasksBtn && (
                                        <CustomTasks
                                            customTasks={customTasks}
                                            setCustomTitle={setCustomTitle}
                                            setCustomDesc={setCustomDesc}
                                            handleAddCustomTask={
                                                handleAddCustomTask
                                            }
                                            addTask={addTask}
                                        />
                                    )) ||
                                    (ourTasksBtn &&
                                        ourTasks.map((ourTask, id) => (
                                            <Row key={id} md={12}>
                                                <Col
                                                    className="rounded py-2 w-100 text-center"
                                                    md={12}
                                                >
                                                    <Button
                                                        className="w-100 mx-0"
                                                        variant="dark"
                                                        id="task-button2"
                                                        onClick={() => {
                                                            addTask(ourTask);
                                                        }}
                                                        style={{
                                                            backgroundColor:
                                                                "#ff8600ff",
                                                        }}
                                                    >
                                                        {ourTask.title}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        ))) ||
                                    (tasks &&
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
                                                                {task.desc}{" "}
                                                                actual id is{" "}
                                                                {id}
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
                                                                    Mark as
                                                                    finished (+
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
                                        }))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Tasks;

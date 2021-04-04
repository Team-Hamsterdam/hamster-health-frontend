import React, { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar1";
import CustomTasks from "./CustomTasks";
import { api } from "./Api";
import CreateAlert from "./CreateAlert";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [ourTasks, setOurTasks] = useState([]);
  const [customTasks, setCustomTasks] = useState([]);
  const [taskPreview, setTaskPreview] = useState(0);
  const [ourTasksBtn, setOurTasksBtn] = useState(false);
  const [customTasksBtn, setCustomTasksBtn] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customDesc, setCustomDesc] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("danger");
  const [showAlert, setShowAlert] = useState(false);
  const max_custom_tasks = 8;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchActiveTasks = async () => {
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
      } catch (e) {
        console.warn(e);
        setShowAlert(true);
        setAlertText(`An unexpected error has occured`);
      }
    };
    const fetchOurTasks = async () => {
      try {
        const res = await fetch(`${api}/task/getourtasks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();

        return data.tasks;
      } catch (e) {
        console.warn(e);
        setShowAlert(true);
        setAlertText(`An unexpected error has occured`);
      }
    };
    const fetchCustomTasks = async () => {
      try {
        const res = await fetch(`${api}/task/getcustomtasks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();

        return data.tasks;
      } catch (e) {
        console.warn(e);
        setShowAlert(true);
        setAlertText(`An unexpected error has occured`);
      }
    };
    const getTasks = async () => {
      // setTasks([
      //     {
      //         id: 1,
      //         title: "Run 5km",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 2,
      //         title: "Sleep for 24 hours",
      //         desc: "run 5km??2",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 3,
      //         title: "Run 5000000km",
      //         desc: "run 5km??3",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 4,
      //         title: "Swim 500000000km",
      //         desc: "run 5km??4",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 5,
      //         title: "Run 5km",
      //         desc: "run 5km??5",
      //         xp: "20",
      //         is_custom: false,
      //     },
      // ]);
      // setOurTasks([
      //     {
      //         id: 1,
      //         title: "Sleep for 20 hours",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 2,
      //         title: "Take a 20 minute nap",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 3,
      //         title: "Eat a raw onion",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 1,
      //         title: "Sleep for 20 hours",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 2,
      //         title: "Take a 20 minute nap",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 3,
      //         title: "Eat a raw onion",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 1,
      //         title: "Sleep for 20 hours",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 2,
      //         title: "Take a 20 minute nap",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 3,
      //         title: "Eat a raw onion",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 1,
      //         title: "Sleep for 20 hours",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 2,
      //         title: "Take a 20 minute nap",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      //     {
      //         id: 3,
      //         title: "Eat a raw onion",
      //         desc: "run 5km??1",
      //         xp: "20",
      //         is_custom: false,
      //     },
      // ]);
      const tasksFromServer = await fetchActiveTasks();
      if (tasksFromServer) setTasks(tasksFromServer);
      console.log("active tasks", tasksFromServer);

      const ourTasksFromServer = await fetchOurTasks();
      if (ourTasksFromServer) setOurTasks(ourTasksFromServer);
      console.log("our tasks", ourTasksFromServer);

      const customTasksFromServer = await fetchCustomTasks();
      if (customTasksFromServer) setCustomTasks(customTasksFromServer);
      console.log("custom tasks", customTasksFromServer);
    };
    getTasks();
  }, []);

  const removeTask = async (task) => {
    console.log("about to remove task with task id ", task.task_id);
    const token = localStorage.getItem("token");

    try {
      const body = {
        task_id: task.task_id,
      };
      const res = await fetch(`${api}/task/removeactivetask`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (res.ok) {
        console.log("task successfully added to active tasks");
        const newTasks = tasks;
        const index = tasks.map((e) => e.task_id).indexOf(task.task_id);

        newTasks.splice(index, 1);
        setTasks(newTasks);
        if (index === 0) {
          handleTaskClick(-1);
        }
        handleTaskClick(index - 1);
      } else {
        setShowAlert(true);
        setAlertType("danger");
        setAlertText(`${data.message}`);
      }
    } catch (e) {
      console.warn(e);
      setShowAlert(true);
      setAlertText(`An unexpected error has occured`);
    }
  };

  const handleOurTasksBtn = () => {
    setOurTasksBtn(true);
    setCustomTasksBtn(false);
  };

  const handleCustomTasksBtn = () => {
    setCustomTasksBtn(true);
    setOurTasksBtn(false);
  };

  const handleTaskClick = (id) => {
    setTaskPreview(id);
    setOurTasksBtn(false);
    setCustomTasksBtn(false);
  };

  const addTask = async (task) => {
    const token = localStorage.getItem("token");
    console.log(tasks.length);
    setCustomTitle("");
    setCustomDesc("");
    if (tasks.length < max_tasks) {
      try {
        const body = {
          task_id: task.task_id,
        };
        console.log("XXXXXXXXXXXXXXXX");
        console.log(task);
        console.log(body);
        const res = await fetch(`${api}/task/addactivetask`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        if (res.ok) {
          console.log("task successfully added to active tasks");
          const newTask = {
            task_id: task.task_id,
            title: task.title,
            description: task.description,
            task_xp: task.task_xp,
            is_custom: false,
          };
          setTasks([...tasks, newTask]);
        } else {
          setShowAlert(true);
          setAlertType("danger");
          setAlertText(`${data.message}`);
          console.log(data);
        }
      } catch (e) {
        console.warn(e);
        setShowAlert(true);
        setAlertText(`An unexpected error has occured`);
      }
    }
    if (tasks.length === max_tasks - 1) {
      handleTaskClick(tasks.length);
    }
  };

  const handleAddCustomTask = async () => {
    if (customTasks.length >= max_custom_tasks) {
      setShowAlert(true);
      setAlertType("danger");
      setAlertText(`Sorry, you can't have more than ${max_custom_tasks} tasks.`);
      return;
    }
    if (customTitle.length > 0) {
      const token = localStorage.getItem("token");
      try {
        const body = {
          title: customTitle,
          description: customDesc,
        };

        const res = await fetch(`${api}/task/create`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(body),
        });
        const data = await res.json();

        if (res.ok) {
          const newTask = {
            task_id: data.task_id,
            title: customTitle,
            description: customDesc,
            task_xp: 5,
            is_custom: 1,
          };
          const includes = customTasks.some((task) => {
            return task.title === newTask.title && task.description === newTask.description;
          });

          // client side
          if (!includes) {
            setCustomTasks([...customTasks, newTask]);
          } else {
            setShowAlert(true);
            setAlertText(`You already have this task!`);
          }
        } else {
          setShowAlert(true);
          setAlertType("danger");
          setAlertText(`${data.message}`);
        }
      } catch (e) {
        console.warn(e);
        setShowAlert(true);
        setAlertText(`An unexpected error has occured`);
      }
    } else {
      setShowAlert(true);
      setAlertType("danger");
      setAlertText(`Your new task title can't be empty!`);
    }
  };

  const handleFinishTask = async (task) => {
    const token = localStorage.getItem("token");
    try {
      const body = {
        task_id: task.task_id,
      };
      const res = await fetch(`${api}/task/finish`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        removeTask(task);
        setShowAlert(true);
        setAlertType("success");
        setAlertText(`You just gained +${task.task_xp}XP`);
      } else {
        setShowAlert(true);
        setAlertType("danger");
        setAlertText(`${data.message}`);
      }
    } catch (e) {
      console.warn(e);
      setShowAlert(true);
      setAlertText(`An unexpected error has occured`);
    }
  };

  const max_tasks = 5;
  return (
    <>
      <Navbar1 />
      <Container className="max-height pt-1" style={{ backgroundColor: "#27187E" }}>
        <Row md={12}>
          <Col md={4} style={{ backgroundColor: "#31278E" }}>
            <h1 className="text-center">Tasks</h1>
            <h4 className="text-center">{moment().format("dddd, Do MMMM YYYY")}</h4>
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
                              backgroundColor: "#fca13eff",
                            }
                          : {
                              backgroundColor: "#31278E",
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
                {tasks && tasks.length < max_tasks ? (
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
                            backgroundColor: "#31278E",
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
                            backgroundColor: "#31278E",
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
                <CreateAlert
                  text={alertText}
                  type={alertType}
                  show={showAlert}
                  setShow={setShowAlert}
                  classes="task-alert"
                />
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
                {(customTasksBtn && (
                  <CustomTasks
                    customTasks={customTasks}
                    setCustomTitle={setCustomTitle}
                    setCustomDesc={setCustomDesc}
                    handleAddCustomTask={handleAddCustomTask}
                    addTask={addTask}
                    show={false}
                    setShow={setShowAlert}
                    type={alertType}
                    text={alertText}
                    setCustomTasks={setCustomTasks}
                    setShowAlert={setShowAlert}
                    setAlertType={setAlertType}
                    setAlertText={setAlertText}
                  />
                )) ||
                  (ourTasksBtn &&
                    ourTasks.map((ourTask, id) => (
                      <Row key={id} md={12}>
                        <Col className="rounded py-2 w-100 text-center" md={12}>
                          <Button
                            className="w-100 mx-0"
                            variant="dark"
                            id="task-button2"
                            onClick={() => {
                              addTask(ourTask);
                            }}
                            style={{
                              backgroundColor: "#ff8600ff",
                            }}
                          >
                            {ourTask.title}
                          </Button>
                        </Col>
                      </Row>
                    ))) ||
                  (tasks &&
                    tasks.map((task, key) => {
                      if (key === taskPreview) {
                        return (
                          <React.Fragment key={key}>
                            <Row
                              md={12}
                              id="task-title"
                              style={{
                                backgroundColor: "#31278E",
                              }}
                            >
                              <h2 className="px-2 w-100 text-center">{task.title}</h2>
                            </Row>
                            <Row md={12}>
                              <p className="px-2 py-2">{task.description}</p>
                            </Row>
                            <Row md={12}>
                              <Col md={6} className="px-2">
                                <Button
                                  className="w-100 mx-0"
                                  variant="dark"
                                  id="task-button2"
                                  style={{
                                    backgroundColor: "#31278E",
                                  }}
                                  onClick={() => {
                                    handleFinishTask(task);
                                  }}
                                >
                                  Mark as finished (+
                                  {task.task_xp}XP)
                                </Button>
                              </Col>
                              <Col md={6} className="px-2">
                                <Button
                                  variant="dark"
                                  id="task-button2"
                                  className="w-100 mx-0"
                                  onClick={() => removeTask(task)}
                                  style={{
                                    backgroundColor: "#31278E",
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

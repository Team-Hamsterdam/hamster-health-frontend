import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CreateAlert from "./CreateAlert";
import Form from "react-bootstrap/Form";
import { api } from "./Api";
const CustomTasks = ({
  customTasks,
  setCustomTitle,
  setCustomDesc,
  handleAddCustomTask,
  addTask,
  setShow,
  type,
  text,
  show,
  setCustomTasks,
  setShowAlert,
  setAlertType,
  setAlertText,
}) => {
  const removeCustomTask = async (task) => {
    const token = localStorage.getItem("token");

    try {
      const body = {
        task_id: task.task_id,
      };
      const res = await fetch(`${api}/task/remove`, {
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
        const newTasks = customTasks;
        const index = customTasks.map((e) => e.task_id).indexOf(task.task_id);
        newTasks.splice(index, 1);
        setCustomTasks([...newTasks]);
      } else {
        setShowAlert(true);
        setAlertType("danger");
        setAlertText(`${data.message}`);
      }
    } catch (e) {
      setShowAlert(true);
      console.warn(e);
      setAlertText(`An unexpected error has occured`);
    }
  };
  return (
    <>
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
              maxLength="20"
              placeholder="Enter Title"
              onChange={(e) => setCustomTitle(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row md={12}>
          <Form.Group className="w-100 mt-2 mx-2" controlId="formBasicDesc">
            <Form.Control
              type="text"
              maxLength="50"
              placeholder="Enter Description"
              onChange={(e) => setCustomDesc(e.target.value)}
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
                backgroundColor: "#31278E",
              }}
            >
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      <>
        <CreateAlert text={text} type={type} show={show} setShow={setShow} />
        <h4 className="mb-1">Your Tasks</h4>
        {customTasks &&
          customTasks.map((customTask, id) => (
            <Row key={id} md={12}>
              <Col className="rounded py-2" md={12}>
                <Button
                  className="custom-task-btn mx-0 text-left overflow-hidden"
                  variant="dark"
                  id="task-button2"
                  onClick={() => {
                    addTask(customTask);
                  }}
                  style={{
                    backgroundColor: "#ff8600ff",
                  }}
                >
                  <span>
                    {customTask.title} {customTask.description.length > 0 ? "- " : ""}
                    {customTask.description}
                  </span>
                </Button>
                <Button
                  onClick={() => {
                    removeCustomTask(customTask);
                  }}
                  className="task-close mx-0 text-left overflow-hidden"
                  aria-hidden="true"
                >
                  <span>&times;</span>
                </Button>
              </Col>
            </Row>
          ))}
      </>
    </>
  );
};

export default CustomTasks;

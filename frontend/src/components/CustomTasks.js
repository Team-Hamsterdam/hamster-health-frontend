import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const CustomTasks = ({
    customTasks,
    setCustomTitle,
    setCustomDesc,
    handleAddCustomTask,
    addTask,
}) => {
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
                    <Form.Group
                        className="w-100 mt-2 mx-2"
                        controlId="formBasicDesc"
                    >
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
                <h4 className="mb-1">Your Custom Tasks</h4>
                {customTasks.map((customTask, id) => (
                    <Row key={id} md={12}>
                        <Col className="rounded py-2 w-100" md={12}>
                            <Button
                                className="w-100 mx-0 text-left overflow-hidden"
                                variant="dark"
                                id="task-button2"
                                onClick={() => {
                                    addTask(customTask);
                                }}
                                style={{
                                    backgroundColor: "#ff8600ff",
                                }}
                            >
                                {customTask.title} - {customTask.desc}
                            </Button>
                        </Col>
                    </Row>
                ))}
            </>
        </>
    );
};

export default CustomTasks;

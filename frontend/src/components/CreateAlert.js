import React from "react";
import Alert from "react-bootstrap/Alert";

const CreateAlert = ({ type, text, show, classes, setShow }) => {
  return (
    <Alert
      onClose={() => setShow(false)}
      dismissible
      className={classes}
      show={show}
      variant={type}
    >
      {text}
    </Alert>
  );
};

export default CreateAlert;

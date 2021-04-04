import React from "react";
import Alert from "react-bootstrap/Alert";

const CreateAlert = ({ type, text, show, classes }) => {
  return (
    <Alert className={classes} show={show} variant={type}>
      {text}
    </Alert>
  );
};

export default CreateAlert;

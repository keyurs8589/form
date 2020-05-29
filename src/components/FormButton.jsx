import React from "react";
import { Button } from "react-bootstrap";

function FormButton({ buttonTitle }) {
  const identifyButton = () => {
    buttonTitle === "Update" && console.log("Update State");
    buttonTitle === "Insert" && console.log("Insert State");
    buttonTitle === "Reset" && console.log("Reset State");
  };
  return (
    <Button
      onClick={identifyButton}
      className="mx-5 mb-1 mb-md-2"
      variant="secondary"
    >
      {buttonTitle}
    </Button>
  );
}

export default FormButton;

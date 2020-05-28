import React from "react";
import { Button } from "react-bootstrap";

function FormButton({ buttonTitle }) {
  return (
    <Button className="mx-5 mb-1 mb-md-2" variant="secondary">
      {buttonTitle}
    </Button>
  );
}

export default FormButton;

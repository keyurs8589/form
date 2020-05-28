import React from "react";
import { Form } from "react-bootstrap";

function LabelInput(props) {
  const { formLabel, formMutedText, val } = props;
  return (
    <Form.Group className="input-text">
      <div className="form-label">
        <Form.Label>{formLabel}</Form.Label>
      </div>
      <div>
        <Form.Control size="sm" value={val}/>
        <Form.Text className="text-muted text-light">{formMutedText}</Form.Text>
      </div>
    </Form.Group>
  );
}

export default LabelInput;

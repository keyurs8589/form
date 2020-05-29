import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function LabelInput(props) {
  const { elementId, formLabel, formMutedText, val } = props;
  const [localVal, setLocalVal] = useState(val);
  useEffect(() => {
    setLocalVal(val);
  }, [val]);
  const onChangeHandler = (e) => {
    setLocalVal(e.target.value);
  };
  return (
    <Form.Group className="input-text">
      <div className="form-label">
        <Form.Label>{formLabel}</Form.Label>
      </div>
      <div>
        <Form.Control
          id={elementId}
          size="sm"
          onChange={onChangeHandler}
          value={localVal}
        />
        <Form.Text className="text-muted text-light">{formMutedText}</Form.Text>
      </div>
    </Form.Group>
  );
}

export default LabelInput;

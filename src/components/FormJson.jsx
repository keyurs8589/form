import React from "react";
import { Badge, Form, Button } from "react-bootstrap";
import "../style/form.css";
import LabelInput from "./LabelInput";

function FormJson() {
  return (
    <div>
      <h1>
        <Badge variant="secondary">JSON PLACEHOLDER FORM DATA</Badge>
      </h1>
      <Form className="form-main-inline-grid">
        <div className="form-inline-grid">
          <LabelInput
            formLabel="Unique User ID:"
            formMutedText="Unique Identification Number for Each User."
          />
          <LabelInput
            formLabel="User ID:"
            formMutedText="User Identification Number."
          />
          <LabelInput
            formLabel="Title:"
            formMutedText="Given Title from User."
          />
          <LabelInput
            formLabel="Body:"
            formMutedText="Description of given title.."
          />
        </div>
        <div className="button-flex">
          <Button className="mx-5 mb-1 mb-md-0" variant="secondary">
            Add
          </Button>
          <Button className="mx-5 mb-1 mb-md-0" variant="secondary">
            Update
          </Button>
          <Button className="mx-5 mb-1 mb-md-0" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormJson;

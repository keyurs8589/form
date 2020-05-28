import React from "react";
import { Badge, Form} from "react-bootstrap";
import LabelInput from "./LabelInput";
import FormButton from "./FormButton";

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
          <FormButton buttonTitle="Insert" />
          <FormButton buttonTitle="Update" />
          <FormButton buttonTitle="Reset" />
        </div>
      </Form>
    </div>
  );
}

export default FormJson;

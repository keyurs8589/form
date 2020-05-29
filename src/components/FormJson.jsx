import React from "react";
import { Badge, Form } from "react-bootstrap";
import LabelInput from "./LabelInput";
import FormButton from "./FormButton";

function FormJson({ formSingleData }) {
  return (
    <div>
      <h1>
        <Badge variant="secondary">JSON PLACEHOLDER FORM DATA</Badge>
      </h1>
      <Form className="form-main-inline-grid">
        <div className="form-inline-grid">
          <LabelInput
            elementId="id"
            formLabel="Unique User ID:"
            formMutedText="Unique Identification Number for Each User."
            val={formSingleData.id}
          />
          <LabelInput
            elementId="userId"
            formLabel="User ID:"
            formMutedText="User Identification Number."
            val={formSingleData.userId}
          />
          <LabelInput
            elementId="title"
            formLabel="Title:"
            formMutedText="Given Title from User."
            val={formSingleData.title}
          />
          <LabelInput
            elementId="body"
            formLabel="Body:"
            formMutedText="Description of given title.."
            val={formSingleData.body}
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

import React from "react";
import { Badge, Form } from "react-bootstrap";
import LabelInput from "./LabelInput";
import FormButton from "./FormButton";

function FormJson({ formSingleData }) {
  console.log(formSingleData)
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
            val={formSingleData.length !== 0 && formSingleData[0].id}
          />
          <LabelInput
            formLabel="User ID:"
            formMutedText="User Identification Number."
            val={formSingleData.length !== 0 && formSingleData[0].userId}
          />
          <LabelInput
            formLabel="Title:"
            formMutedText="Given Title from User."
            val={formSingleData.length !== 0 && formSingleData[0].title}
          />
          <LabelInput
            formLabel="Body:"
            formMutedText="Description of given title.."
            val={formSingleData.length !== 0 && formSingleData[0].body}
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

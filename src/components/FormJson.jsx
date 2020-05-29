import React, { useState, useEffect } from "react";
import { Badge, Form, Button } from "react-bootstrap";

function FormJson({
  formSingleData,
  updateData,
  displayData,
  resetLength,
  insertData,
}) {
  const [localData, setLocalData] = useState(formSingleData);
  useEffect(() => {
    setLocalData(formSingleData);
  }, [formSingleData]);
  const onIdChangeHandler = (e) => {
    setLocalData({ ...localData, id: e.target.value });
  };
  const onUserIdChangeHandler = (e) => {
    setLocalData({ ...localData, userId: e.target.value });
  };
  const onTitleChangeHandler = (e) => {
    setLocalData({ ...localData, title: e.target.value });
  };
  const onBodyChangeHandler = (e) => {
    setLocalData({ ...localData, body: e.target.value });
  };
  return (
    <div>
      <h1>
        <Badge variant="secondary">JSON PLACEHOLDER FORM DATA</Badge>
      </h1>
      <Form className="form-main-inline-grid">
        <div className="form-inline-grid">
          <Form.Group className="input-text">
            <div className="form-label">
              <Form.Label>Unique User ID:</Form.Label>
            </div>
            <div>
              <Form.Control
                size="sm"
                onChange={onIdChangeHandler}
                onBlur={(e) => displayData(parseInt(e.target.value))}
                value={localData.id}
              />
              <Form.Text className="text-muted text-light">
                Unique Identification Number for Each User.
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="input-text">
            <div className="form-label">
              <Form.Label>User ID:</Form.Label>
            </div>
            <div>
              <Form.Control
                size="sm"
                onChange={onUserIdChangeHandler}
                value={localData.userId}
              />
              <Form.Text className="text-muted text-light">
                User Identification Number.
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="input-text">
            <div className="form-label">
              <Form.Label>Title:</Form.Label>
            </div>
            <div>
              <Form.Control
                size="sm"
                onChange={onTitleChangeHandler}
                value={localData.title}
              />
              <Form.Text className="text-muted text-light">
                Given Title from User.
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="input-text">
            <div className="form-label">
              <Form.Label>Body:</Form.Label>
            </div>
            <div>
              <Form.Control
                size="sm"
                onChange={onBodyChangeHandler}
                value={localData.body}
              />
              <Form.Text className="text-muted text-light">
                Description of given title.
              </Form.Text>
            </div>
          </Form.Group>
        </div>
        <div className="button-flex">
          <Button
            className="mx-5 mb-1 mb-md-2"
            variant="secondary"
            onClick={() => insertData(localData)}
          >
            Insert
          </Button>
          <Button
            className="mx-5 mb-1 mb-md-2"
            variant="secondary"
            onClick={() => updateData(localData)}
          >
            Update
          </Button>
          <Button
            className="mx-5 mb-1 mb-md-2"
            variant="secondary"
            onClick={() =>
              setLocalData({ id: resetLength, userId: "", title: "", body: "" })
            }
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormJson;

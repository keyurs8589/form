import React from "react";
import { ListGroup, ButtonGroup, Button } from "react-bootstrap";

function FormListRow({ data }) {
  return (
    <div>
      <ListGroup horizontal className="list-item">
        <ListGroup.Item
          className={
            data === ""
              ? "px-0 medium-padding invisible-sm font-title"
              : "px-0 medium-padding"
          }
          variant="dark"
        >
          {data === "" ? "UniqueID" : data.id}
        </ListGroup.Item>
        <ListGroup.Item
          className={
            data === ""
              ? "px-0 medium-padding invisible-sm font-title"
              : "px-0 medium-padding"
          }
          variant="secondary"
        >
          {data === "" ? "UserID" : data.userId}
        </ListGroup.Item>
        <ListGroup.Item
          className={data === "" ? "px-0 invisible-sm font-title" : "p-0"}
        >
          {data === "" ? "Title" : data.title}
        </ListGroup.Item>
        <ListGroup.Item
          className={data === "" ? "px-0 invisible-sm font-title" : "p-0"}
        >
          {data === "" ? "Body" : data.body}
        </ListGroup.Item>
        <ListGroup.Item
          className={data === "" ? "invisible-sm" : "px-0 medium-padding"}
        >
          {data !== "" && (
            <ButtonGroup>
              <Button variant="secondary" size="sm">
                Edit
              </Button>
              <Button variant="secondary" size="sm">
                Delete
              </Button>
            </ButtonGroup>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default FormListRow;

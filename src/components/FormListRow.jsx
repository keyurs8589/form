import React from "react";
import { ListGroup, ButtonGroup, Button } from "react-bootstrap";

function FormListRow() {
  return (
    <div>
      <ListGroup horizontal className="list-item">
        <ListGroup.Item className="px-0 medium-padding" variant="dark">
          1
        </ListGroup.Item>
        <ListGroup.Item className="px-0 medium-padding" variant="secondary">
          1
        </ListGroup.Item>
        <ListGroup.Item className="p-0">
         title
        </ListGroup.Item>
        <ListGroup.Item className="p-0">
          body
        </ListGroup.Item>
        <ListGroup.Item className="px-0 medium-padding">
          <ButtonGroup>
            <Button variant="secondary" size="sm">Edit</Button>
            <Button variant="secondary" size="sm">Delete</Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default FormListRow;

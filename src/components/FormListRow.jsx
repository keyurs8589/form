import React, {useState} from "react";
import { ListGroup, Button } from "react-bootstrap";

function FormListRow({ data, deleteData }) {
  const [localData, setLocalData] = useState(data);
  return (
    <div>
      <ListGroup horizontal className="list-item">
        <ListGroup.Item
          className={
            localData === ""
              ? "px-0 medium-padding invisible-sm font-title"
              : "px-0 medium-padding"
          }
          variant="dark"
        >
          {localData === "" ? "UniqueID" : localData.id}
        </ListGroup.Item>
        <ListGroup.Item
          className={
            localData === ""
              ? "px-0 medium-padding invisible-sm font-title"
              : "px-0 medium-padding"
          }
          variant="secondary"
        >
          {localData === "" ? "UserID" : localData.userId}
        </ListGroup.Item>
        <ListGroup.Item
          className={localData === "" ? "px-0 invisible-sm font-title" : "p-0"}
        >
          {data === "" ? "Title" : data.title}
        </ListGroup.Item>
        <ListGroup.Item
          className={localData === "" ? "px-0 invisible-sm font-title" : "p-0"}
        >
          {localData === "" ? "Body" : localData.body}
        </ListGroup.Item>
        <ListGroup.Item
          className={localData === "" ? "invisible-sm" : "px-0 medium-padding"}
        >
          {localData !== "" && (
            <Button onClick={deleteData} variant="secondary" size="sm">
              Delete
            </Button>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default FormListRow;

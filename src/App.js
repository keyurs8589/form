import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/form.css";
import FormJson from "./components/FormJson";
import FormListRow from "./components/FormListRow";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState([]);
  const [formId, setFormId] = useState(1);
  const deleteData = (deleteId) => {
    setFormData(formData.filter((data) => data.id !== deleteId));
    formId === deleteId &&
      setFormId(
        parseInt(
          prompt(
            "Trying to delete display form id please enter another ID to display",
            1
          )
        )
      );
  };
  const displayData = (displayId) => {
    setFormId(displayId);
  };
  const updateData = (editedData, editedId) => {
    setFormData(
      formData.map((data) => (data.id === editedId ? editedData : data))
    );
  };
  const insertData = (newData) => {
    setFormData(formData.concat(newData));
    formData.sort((a, b) => a - b);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          setFormData(res.data);
        } else if (res.status === 400) {
          console.log("Data Fetching Error");
        }
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <div className="App form-body">
      <FormJson
        formSingleData={
          formData.length !== 0
            ? formData.find((data) => data.id === formId)
            : ""
        }
        displayData={(displayId) => displayData(displayId)}
        updateData={(editedData) => updateData(editedData, formId)}
        resetLength={formData.length + 1}
        insertData={(newData) => insertData(newData)}
      />
      <FormListRow data={""} />
      {formData.map((data) => (
        <FormListRow
          key={data.id}
          data={data}
          deleteData={() => {
            deleteData(data.id);
          }}
        />
      ))}
    </div>
  );
}

export default App;

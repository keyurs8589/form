import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/form.css";
import FormJson from "./components/FormJson";
import FormListRow from "./components/FormListRow";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState([]);
  const [formId, setFormId] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          setFormData(res.data);
        } else {
          console.log("Data Fetching Error");
        }
      })
      .catch((err) => console.log(err.data));
  }, []);
  console.log(formData.filter(data => data.id === 1));
  return (
    <div className="App form-body">
      <FormJson formSingleData={formData.filter(data => data.id === 1)} />
      <FormListRow data={""} />
      {formData.map((data) => (
        <FormListRow key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/form.css";
import FormJson from "./components/FormJson";
import FormListRow from "./components/FormListRow";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err.data));
  }, []);
  console.log(formData);
  return (
    <div className="App form-body">
      <FormJson />
      {formData.map((data) => (
        <FormListRow key={formData.id} data={data}></FormListRow>
      ))}      
    </div>
  );
}

export default App;

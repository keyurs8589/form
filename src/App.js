import React from 'react';
import './App.css';
import "./style/form.css";
import FormJson from "./components/FormJson"
import FormListRow from "./components/FormListRow"

function App() {
  return (
    <div className="App form-body">
       <FormJson/>
       <FormListRow/>
    </div>
  );
}

export default App;

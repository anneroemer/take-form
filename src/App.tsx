import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
//import FormProvider from "./contexts/FormContext";

function App() {
  return (
    <div className="App">
      {/* <FormProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notes" element={<Notes />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </FormProvider> */}
    </div>
  );
}

export default App;

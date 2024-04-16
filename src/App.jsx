import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Input from "./Container/Input";
import UserPage from "./Container/UserPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 const username=prompt('emter user name');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input/>} />
        <Route path="/user/:username" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


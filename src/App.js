// import "./App.css";
import React from "react";
// import Sidebar from "./Components/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Leads from "./pages/Leads";
import Sales from "./pages/Sales";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Support from "./pages/Support";
import Contracts from "./pages/Contracts";
import Hrm from "./pages/Hrm";
import Setup from "./pages/Setup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/customer" exact element={<Customer />}></Route>
          <Route path="/leads" exact element={<Leads />}></Route>
          <Route path="/sales" exact element={<Sales />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
          <Route path="/tasks" exact element={<Tasks />}></Route>
          <Route path="/support" exact element={<Support />}></Route>
          <Route path="/contracts" exact element={<Contracts />}></Route>
          <Route path="/hrm" exact element={<Hrm />}></Route>
          <Route path="/setup" exact element={<Setup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

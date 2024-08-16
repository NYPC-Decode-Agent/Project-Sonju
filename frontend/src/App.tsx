import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import routes from './router/routes'
import { Sidebar } from "./components/Sidebar";


const App: React.FC = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <header className="App-header app-container">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

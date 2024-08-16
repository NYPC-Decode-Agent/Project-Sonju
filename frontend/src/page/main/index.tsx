import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../../router/routes";
import { Footer } from "../../common/Footer";
import Header from "../../common/Header";

export const Main = () => {
  const [value, setValue] = useState("김철수");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <header className="App-header app-container"></header>
        <div className="mt-16">
          <main>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

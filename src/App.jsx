import React, { useEffect, useState } from "react";
import "./css/containerApp.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme"); // "dark" | "light" | null
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");

    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  return (
    <div className="containerApp">
      <Header isDark={isDarkTheme} setIsDark={setIsDarkTheme} />
      <Main />
    </div>
  );
}

export default App;
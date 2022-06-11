import Switch from "./Components/Switch";
import "./styles.css";
import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Switch onchangeSwitch={toggleTheme} onCheck={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
}

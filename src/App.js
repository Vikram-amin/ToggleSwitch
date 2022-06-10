import Switch from "./Components/Switch";
import "./styles.css";
import React from "react"
import {createContext} from "react"

export const ThemeContext = createContext(null)

export default function App() {
const[isToggled, setIsToggled] = React.useState(false)

  return (
    <ThemeContext.Provider>
    <div className="App">
      <Switch isToggled ={isToggled} onToggle = {() => setIsToggled(!isToggled)}/>
    </div>
    </ThemeContext.Provider>
  );
}

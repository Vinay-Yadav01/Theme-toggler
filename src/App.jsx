import React, { useEffect, useState } from "react"

import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
import { ThemeProvider } from "./context/Theme"

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
      </div>

      <div className="w-full max-w-sm mx-auto">
          <Card />
      </div>
    </div>
  </div>

    </ThemeProvider>
  )
}

export default App

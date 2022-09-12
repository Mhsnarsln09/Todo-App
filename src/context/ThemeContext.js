import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark" )

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const data = {
    theme,
    setTheme
  }
  return (
    <ThemeContext.Provider value={data}>
            {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext)

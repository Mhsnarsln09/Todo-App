import React from 'react'
import { useTheme } from "../../context/ThemeContext"

export default function ThemeSwitcher() {
    const {theme, setTheme} = useTheme()

    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    console.log(theme)
    if( theme === "dark") {
    return (

            <div className='darkicons'><span style={{color:"#FFDE00", cursor:"pointer"}} className="material-symbols-outlined" onClick={() => switchTheme()}>light_mode</span></div>
        
    ) } else{ return(
        <div className='lighticons'><span className="material-symbols-outlined icons spanlight"  onClick={() => switchTheme()}>mode_night</span></div>
    )}
}


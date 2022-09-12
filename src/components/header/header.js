import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitcher from '../theme/themeSwitcher'

import "./header.css"

export function Header() {
    const { user, setUser } = useAuth()
    const {theme} = useTheme()
    const handleLogOut = () => {
        setUser(false)
      }
    return (
        <nav className={theme === "light" ? "navbar bg-light" : "navbar navbardark"} >
            <div className="container-fluid header" >
                <div className='header-left'>
                    <h3>Todo App1</h3>
                </div>
                {user && 
                <div className='header-center'>
                    <h5>{`Welcome to ${ user.charAt(0).toUpperCase() + user.slice(1).toLowerCase() }`}</h5>
                  
                </div>}
                 
                    <div className='header-right' >
                        <ThemeSwitcher/>
                        {user && <span onClick={handleLogOut} style={{cursor:"pointer"}} className="material-symbols-outlined">logout</span>}
                </div> 
            </div>
        </nav>
    )
}

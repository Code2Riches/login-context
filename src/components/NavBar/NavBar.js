import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext';
import './NavBar.css'

const NavBar = () => {
  const {theme, setTheme, words} = useContext(ThemeContext)
  const funcAlert = () => {
    alert(words)
  }

// local theme setter
  const changeThemeLocal = () => {
    let currentTheme = theme
    currentTheme === 'light' ? setTheme('dark') : setTheme('light') 
  }

  return (
      <>
      <div className={theme}>NavBar</div>
      <button onClick={() => changeThemeLocal()}>Change Theme</button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={()=>funcAlert()}>Funk</button>
      </>
  )
}

export default NavBar
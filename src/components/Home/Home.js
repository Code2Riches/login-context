import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext';
import './Home.css'

const Home = () => {
  const {theme, setTheme, words} = useContext(ThemeContext)
  const funcAlert = () => {
    alert(words)
  }
  return (
      <>
      <div className={theme}>Home</div>
      <button onClick={() => setTheme('light')}>Change Theme</button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={()=>funcAlert()}>Funk</button>
      </>
  )
}

export default Home
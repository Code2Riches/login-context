import React, {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext';
import './Home.css'
import Card from '../Card/Card';

const Home = () => {
  const {theme, setTheme, words, changeTheme} = useContext(ThemeContext)
  const funcAlert = () => {
    alert(words)
  }
// local theme setter
//   const changeTheme = () => {
//     let currentTheme = theme
//     currentTheme === 'light' ? setTheme('dark') : setTheme('light') 
//   }
  return (
      <>
      <div className={theme}>Home</div>
      <button onClick={() => changeTheme()}>Change Theme</button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={()=>funcAlert()}>Funk</button>
      <Card />
      </>
  )
}

export default Home
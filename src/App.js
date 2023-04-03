import {createContext, useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import { ThemeContext } from './context/ThemeContext';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [theme, setTheme] = useState('dark')
  //global theme setter
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }
  let words = 'Yo!'
  return (
    <div className="App">
      <ThemeContext.Provider value={
        {theme, setTheme, words, changeTheme}
      }>
        <h1>Login</h1>
        <NavBar />
        <Home />
      </ThemeContext.Provider>
      <Card />
    </div>
  );
}


export default App;


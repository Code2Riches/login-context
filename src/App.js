import {createContext, useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import { ThemeContext } from './context/ThemeContext';


function App() {
  const [theme, setTheme] = useState('dark')
  let words = 'Yo!'
  return (
    <div className="App">
      <ThemeContext.Provider value={
        {theme, setTheme, words}
      }>
        <h1>Login</h1>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}


export default App;


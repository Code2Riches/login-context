import {createContext, useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark')
  //global theme setter
 
  return (
    <div className="App">
      <ThemeContext.Provider value={
        {theme, setTheme}
      }>
        <h1>Login</h1>

      </ThemeContext.Provider>
    </div>
  );
}


export default App;


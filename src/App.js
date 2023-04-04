import {createContext, useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { LoginContext, LoginProvider } from './context/LoginContext';

function App() {
  const [theme, setTheme] = useState('dark')
 
  return (
    <div className="App">
      <ThemeContext.Provider value={
        {theme, setTheme}
      }>
        <LoginProvider>
          <h1>Login</h1>
          <p>Yo!</p>
        </LoginProvider>
      </ThemeContext.Provider>
    </div>
  );
}


export default App;


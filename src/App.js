import {createContext, useContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { LoginContext, LoginProvider } from './context/LoginContext';
import Login from './components/Login';

function App() {
  const [theme, setTheme] = useState('dark')
 
  return (
    <div className="App">
      <ThemeContext.Provider value={
        {theme, setTheme}
      }>
        <LoginProvider>
          <Login />
        </LoginProvider>
      </ThemeContext.Provider>
    </div>
  );
}


export default App;


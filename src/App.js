import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import { ProfileScreen } from './Pages/ProfileScreen/ProfileScreen';
import { LoginScreen } from './Pages/LoginScreen/LoginScreen';

function App() {

  const user = null;

  return (
    <div className="App">
      <Router>
        {
          !user ?
            <LoginScreen />
            :
            <Routes>
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
        }
      </Router>
    </div>
  );
}

export default App;

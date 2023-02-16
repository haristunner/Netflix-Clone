import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import { LoginScreen } from './Pages/LoginScreen/LoginScreen';
import { SignOut } from './Pages/SignOut/SignOut';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path="/signOut" element={<SignOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

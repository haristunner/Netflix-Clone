import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';

function App() {

  const user = 1;

  return (
    <div className="App">
      <Router>
        {
          !user ?
            <h1>Login</h1>
            :
            <Routes>
              <Route path='/profile' />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
        }
      </Router>
    </div>
  );
}

export default App;

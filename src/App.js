import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

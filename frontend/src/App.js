import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginScreen from "./screens/LoginScreen";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path="/login" element={<LoginScreen/>} />
                    <Route path="/register" element={} />
                    <Route path="/" element={}>
                        <Route path="/" element={} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

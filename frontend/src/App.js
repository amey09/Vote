import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path="/login" element={} />
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

import React from 'react';
import './App.css';
import  Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/RegisterVideo/index';
import { Testando } from './pages/Teste';
import PrivateRoutes from './utils/PrivateRoutes';
import RegisterVideo from './pages/RegisterVideo/index';
import VideosUser from './pages/VideoPage';
import VideoOpen from './components/VideoOpened';



function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/videoupload" element={<RegisterVideo />} />
          <Route path="/video/:id" element={<VideoOpen />} />
          <Route path="/videouser" element={<VideosUser />}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/teste" element={<Testando />}/>
            
          </Route>
      </Routes>
    </Router>
  );
}

export default App;

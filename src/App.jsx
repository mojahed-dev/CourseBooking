// import './App.css';
import AppNavbar from './components/AppNavbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Banner from './components/Banner';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (

    <BrowserRouter>
    <AppNavbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

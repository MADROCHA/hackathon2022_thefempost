import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Login from '../pages/Login';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/post/:id" element={ <Post/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </Router>
  )
}

export default RoutesConfig
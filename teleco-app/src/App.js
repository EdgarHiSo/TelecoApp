import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import PostList from './components/posts/PostList';

function App() {
  return (
    <div id="mainBox" className='mainBox' style={{ height: "100%" }}>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/posts' element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;

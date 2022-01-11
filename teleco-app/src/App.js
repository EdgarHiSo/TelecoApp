import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import PostList from './components/posts/PostList';

function App() {
  return (
    <div className="mainBox">
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/posts' element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;

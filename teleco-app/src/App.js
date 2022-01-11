import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <div className="mainBox">
      <Routes>
        <Route exact path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;

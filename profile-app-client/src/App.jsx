import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;

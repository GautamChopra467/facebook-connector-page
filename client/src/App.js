import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Posts from './modules/feed/presentation/pages/Posts';
import Demo from './modules/feed/presentation/pages/Demo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route exact path='/demo' element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AccountPages from './modules/fbPage/presentation/pages/AccountPages';
import SinglePage from './modules/fbPage/presentation/pages/SinglePage';
import Register from './modules/user/presentation/pages/Register';
import Login from './modules/user/presentation/pages/Login';
import Message from './modules/fbMessage.jsx/presentation/pages/Message';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path='/pages' element={<AccountPages />} />
        <Route exact path='/page/:id' element={<SinglePage />} />
        <Route exact path="/message/:id" element={<Message />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

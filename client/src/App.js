import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Posts from './modules/feed/presentation/pages/Posts';
import Demo from './modules/feed/presentation/pages/Demo';
import { useState } from 'react';
import AccountPages from './modules/fbPage/presentation/pages/AccountPages';
import SinglePage from './modules/fbPage/presentation/pages/SinglePage';
import Register from './modules/user/presentation/pages/Register';
import Login from './modules/user/presentation/pages/Login';
import MessageContainer from './modules/fbMessage.jsx/presentation/pages/MessageContainer';
import Message from './modules/fbMessage.jsx/presentation/pages/Message';

const App = () => {

  // const [allcomments,setAllComments] = useState([])


  // const getComments = ()=>{
  //   axios.get(`${process.env.REACT_APP_BACKEND_PORT}pageinfo`).then(({data})=>{
  //     setAllComments(data)
  //   })
  // }

  // console.log(allcomments)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Register />} />
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/pages' element={<AccountPages />} />
        <Route exact path='/page/:id' element={<SinglePage />} />
        <Route exact path="/temp" element={<MessageContainer />} />
        <Route exact path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
    {/* <button onClick={getComments}> Get Comments </button> */}

    {/* <button onClick={printComment}> Single Comments </button> */} 
    {/* {
         (allcomments === undefined)?"":(
        allcomments.map((comment)=>(
          // console.log(comment.id)
          <>
          <div key={comment.id}>
          <img src={comment.full_picture}/>
          <p>{comment.message}</p>
          </div>
         
          </>
        )))
    } */}

    </>
  )
}

export default App;

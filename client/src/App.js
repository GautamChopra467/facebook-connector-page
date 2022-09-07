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

const App = () => {

  const [allcomments,setAllComments] = useState([])

  const [allmessages,setPostMessages] = useState([])

  const getComments = ()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}message/108046888706313`).then(({data})=>{
      setAllComments(data)
    })

  }

  const postMessages = ()=>{
    axios.post(`${process.env.REACT_APP_BACKEND_PORT}message/108046888706313/8628821597129716`,{
      message:"Demo Message !"
    }).then(({data})=>{
      setAllComments(data)
    })
  }

  console.log(allcomments)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Register />} />
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/pages' element={<AccountPages />} />
        <Route exact path='/page/:id' element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
    <button onClick={getComments}> Get Message </button>

    {/* <button onClick={postMessages}> Post Message </button> */}

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

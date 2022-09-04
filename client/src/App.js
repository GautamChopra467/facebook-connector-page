import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Posts from './modules/feed/presentation/pages/Posts';
import Demo from './modules/feed/presentation/pages/Demo';
import { useState } from 'react';
import AccountPages from './modules/fbPage/presentation/pages/AccountPages';
import SinglePage from './modules/fbPage/presentation/pages/SinglePage';

const App = () => {

  const [allcomments,setAllComments] = useState([])


  // const getComments = ()=>{
  //   axios.get(`${process.env.REACT_APP_BACKEND_PORT}feed`).then(({data})=>{
  //     setAllComments(data.data)
  //   })
  // }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/pages' element={<AccountPages />} />
        <Route exact path='/page' element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
    {/* <button onClick={getComments}> Get Comments </button>
    <button onClick={printComment}> Single Comments </button> */}
    {
         (allcomments === undefined)?"":(
        allcomments.map((comment)=>(
          // console.log(comment.id)
          <>
          <div key={comment.id}>
          <p>{comment.id}</p>
          <p>{comment.message}</p>
          </div>
         
          </>
        )))
    }

    </>
  )
}

export default App;
